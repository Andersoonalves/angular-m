import { ComponentRef, Type, Injector } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { OnChanges, SimpleChange, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AngularMService } from '../angular.m.service';
import { EntityType, PropertyType, Entity, Property } from './entity.type';


export class AbstractPortDirective implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  protected componentRefs: Array<ComponentRef<any>> = [];
  protected wasViewInitialized = false;

  constructor(
    private componentTarget: ViewContainerRef,
    private compiler: ComponentFactoryResolver,
    private angularm: AngularMService
  ) {}

  protected foreachEntityType(cb: (entityType: EntityType) => void ) {
    this.angularm.listEntityTypes().forEach((entityType) => {
      cb(entityType);
    });
  }

  protected foreachPropertyType(entityType: EntityType, cb: (propertyType: PropertyType) => void ) {
    entityType.propertyTypes.forEach((propertyType) => {
      cb(propertyType);
    });
  }

  protected foreachEntity(entitytype, cb: (entityType: EntityType) => void ) {
    this.angularm.listAll(entitytype.singular).then( entities => {
      entities.forEach( entity => {
        cb(entity);
      });
    });
  }

  protected foreachProperty(entity: Entity, cb: (property: Property) => void ) {
    entity.entityType.propertyTypes.forEach((propertyType) => {
      let property = new Property(entity, propertyType, entity.properties[propertyType.name]);
      cb(property);
    });
  }

  protected createEntityTypeWidget(entityType, port) {
      let widgetConnection = this.angularm.getEntityTypeWidget(entityType, port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.entitytype = entityType;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
  }

  protected createPropertyTypeWidget(propertyType, port, mgForm: FormGroup) {
      let widgetConnection = this.angularm.getPropertyTypeWidget(propertyType, port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.propertyType = propertyType;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
      if (mgForm) {
        componentRef.instance.mgFormControl = mgForm.controls[propertyType.name];
      }
  }

  protected createEntityWidget(entity, port) {
    let widgetConnection = this.angularm.getEntityWidget(entity.entityType, port);
    let componentRef = this.createComponent(widgetConnection.widget);
    componentRef.instance.entity = entity;
    componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
  }

  protected createPropertyWidget(property, port, mgForm: FormGroup) {
      console.log('rule', property, port);
      let widgetConnection = this.angularm.getPropertyWidget(property, port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.property = property;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
      if (mgForm) {
        componentRef.instance.mgFormControl = mgForm.controls[property.propertyType.name];
      }
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
