import { Component, ViewContainerRef, Directive, Type } from '@angular/core';
import { ComponentRef, ComponentFactoryResolver, Input } from '@angular/core';

import { AbstractPortDirective } from './abstract.port.directive';
import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachEntityType]'
})
export class ForeachEntityTypeDirective extends AbstractPortDirective {

  @Input('mgForeachEntityType') port: string;

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

    this.domain.listEntityTypes().forEach((entityType) => {
      let componentType = this.rule.getWidget(entityType.name, this.port);
      let componentRef = this.createComponent(componentType);
      componentRef.instance.entitytype = entityType;
    });
  }

}
