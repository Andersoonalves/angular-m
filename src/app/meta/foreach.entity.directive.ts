import { Component, ViewContainerRef, Directive, Type } from '@angular/core';
import { ComponentRef, ComponentFactoryResolver, Input, Host, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AbstractPortDirective } from './abstract.port.directive';
import { EntityType } from './entity.type';
import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachEntity]'
})
export class ForeachEntityDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachEntity') port: string;
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

    let widgetConnection = this.rule.getEntityWidget(this.entitytype, this.port);
    let service = this.domain.getService(this.entitytype.singular);
    service.listAll().then( entities => {
      entities.forEach( entity => {
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.entity = entity;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
      });
    });
  }

}
