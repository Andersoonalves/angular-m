import { ComponentRef, Type, Injector } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { OnChanges, SimpleChange, ViewContainerRef, ReflectiveInjector } from '@angular/core';

import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';
import { EntityType } from './entity.type';


export class AbstractPortDirective implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  protected componentRefs: Array<ComponentRef<any>> = [];
  protected wasViewInitialized = false;

  private domain: DomainService;
  private rule: RuleService;
  private injector: Injector;

  constructor(
    private componentTarget: ViewContainerRef,
    private compiler: ComponentFactoryResolver
  ) {

    this.injector = 
      ReflectiveInjector.resolveAndCreate(
        [DomainService, RuleService]
          .concat(DomainService.serviceTypes())
          .concat(RuleService.serviceTypes()));
    this.domain = this.injector.get(DomainService);
    this.rule = this.injector.get(RuleService);
  }

  protected forEachEntityType(cb: (entityType: EntityType) => void ) {
    this.domain.listEntityTypes().forEach((entityType) => {
      cb(entityType);
    });
  }

  protected createEntityTypeWidget(entityType, port) {
      let widgetConnection = this.rule.getEntityTypeWidget(entityType, port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.entitytype = entityType;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};    
  }


  public refreshContent() {
    this.destroyCurrentComponentRefs();
  }

  private destroyCurrentComponentRefs() {
    this.componentRefs.forEach((componentRef) => {
      componentRef.destroy();
    });
    this.componentRefs = [];
  }

  createComponent(componentType: Type<any>): ComponentRef<any> {
    let factory = this.compiler.resolveComponentFactory(componentType);
    let componentRef = this.componentTarget.createComponent(factory);
    this.componentRefs.push(componentRef);
    return componentRef;
  }

  public ngOnInit() { }

  public ngAfterViewInit(): void {
    this.wasViewInitialized = true;
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
    if (this.wasViewInitialized) {
      return;
    }
    this.refreshContent();
  }

  public ngOnDestroy() {
    this.destroyCurrentComponentRefs();
  }

}
