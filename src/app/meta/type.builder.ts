import { ComponentFactory, Injectable, ComponentFactoryResolver, Type} from '@angular/core';

@Injectable()
export class DynamicTypeBuilder {

  constructor(
    protected compiler: ComponentFactoryResolver
  ) {}

  public createComponentFactory(component: Type<any>): Promise<ComponentFactory<any>> {
     return this.createWidget(component);
  }

  private createWidget(component: Type<any>):
      Promise<ComponentFactory<any>> {

    return new Promise((resolve) => {
        let factory = this.compiler
          .resolveComponentFactory(component);
        resolve(factory);
    });
  }

}
