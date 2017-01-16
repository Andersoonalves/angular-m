import { Component, ViewContainerRef, Directive, Type } from '@angular/core';
import { ComponentRef, ComponentFactoryResolver, Input, Host, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AbstractPortDirective } from './abstract.port.directive';
import { Entity, Property } from './entity.type';
import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachProperty]'
})
export class ForeachPropertyDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachProperty') port: string;
  @Input() entity: Entity;
  @Input() mgForm: FormGroup;

  constructor(
    private domain: DomainService,
    private rule: RuleService,
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver
  ) {
    super(componentTarget, compiler);
  }


  public refreshContent() {
    super.refreshContent();

    this.entity.entityType.propertyTypes.forEach((propertyType) => {
      let property = new Property(this.entity, propertyType, this.entity.properties[propertyType.name]);
      let widgetConnection = this.rule.getPropertyWidget(property, this.port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.property = property;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
      if (this.mgForm) {
        componentRef.instance.mgFormControl = this.mgForm.controls[property.propertyType.name];
      }
    });
  }

}
