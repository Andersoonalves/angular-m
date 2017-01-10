import { Component, ViewContainerRef, Directive, Type } from '@angular/core';
import { ComponentRef, ComponentFactoryResolver, Input, Host, OnInit } from '@angular/core';

import { AbstractPortDirective } from './abstract.port.directive';
import { EntityType } from './entity.type';
import { ForeachEntityTypeDirective } from './foreach.entity.type.directive';
import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachPropertyType]'
})
export class ForeachPropertyTypeDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachPropertyType') port: string;
  @Input() entitytype: EntityType;

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

    this.entitytype.propertyTypes.forEach((propertytype) => {
      let componentType = this.rule.getPropertyTypeWidget(propertytype, this.port);
      let componentRef = this.createComponent(componentType);
      componentRef.instance.propertytype = propertytype;
    });
  }

}
