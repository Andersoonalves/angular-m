import { Component, ComponentFactory, NgModule, Input, Injectable} from '@angular/core';
import { JitCompiler } from '@angular/compiler';

import * as _ from 'lodash';

import { SimpleModule } from '../widgets/simple/simple.module';
import { EntityType } from './entity.type'


@Injectable()
export class DynamicTypeBuilder {

  // this object is singleton - so we can use this as a cache
  private _factories: {[templateKey: string]: ComponentFactory<any>} = {};
  
  // wee need Dynamic component builder
  constructor(
    protected compiler: JitCompiler
  ) {}
    
  public createComponentFactory(template: string) : Promise<ComponentFactory<any>> {
    let factory = this._factories[template];
    return (factory) 
      ? this.reuseWidget(template, factory) 
      : this.createWidget(template, factory);
  }

  private reuseWidget(template: string, factory: ComponentFactory<any>) 
    : Promise<ComponentFactory<any>> {

    console.log(`Widget reused from cache: ${template}`);
       
    return new Promise((resolve) => {
      resolve(factory);
    });
  }

  private createWidget(template: string, factory: ComponentFactory<any>) 
    : Promise<ComponentFactory<any>> {
    
    console.log(`Creating dynamic component and module for Widget: ${template}`);
    
    let component = this.createComponent(template);
    let module = this.createComponentModule(component);
    
    return new Promise((resolve) => {
        this.compiler
            .compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories) => {
                factory = _.find(moduleWithFactories.componentFactories, { componentType: component });
                this._factories[template] = factory;
                resolve(factory);
            });
    });
  }
  
  private createComponent (template: string) {

      @Component({
          selector: 'dynamic-component',
          template: template,
      })
      class DynamicComponent {
          @Input()  public entitytype: EntityType;
      };
      
      return DynamicComponent;
  }

  protected createComponentModule (componentType: any) {
      @NgModule({
        imports: [
          SimpleModule, 
        ],
        declarations: [
          componentType
        ],
      })
      class DynamicModule {}
      return DynamicModule;
  }
}