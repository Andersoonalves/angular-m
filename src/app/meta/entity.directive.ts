import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';

import { AbstractPortDirective } from './abstract.port.directive';
import { Entity } from './entity.type';
import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgEntity]'
})
export class EntityDirective extends AbstractPortDirective implements OnInit {

  @Input('mgEntity') port: string;
  @Input() entity: Entity;

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

    let widgetConnection = this.rule.getEntityWidget(this.entity.entityType, this.port);
    let componentRef = this.createComponent(widgetConnection.widget);
    componentRef.instance.entity = this.entity;
    componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
  }

}
