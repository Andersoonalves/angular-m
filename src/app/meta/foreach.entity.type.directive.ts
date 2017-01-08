import { Component, ViewContainerRef, Directive, Type } from '@angular/core';
import { ComponentRef, ComponentFactoryResolver, Input } from '@angular/core';

import { AbstractPortDirective } from './abstract.port.directive';
import { MetadataService } from './metadata.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachEntityType]'
})
export class ForeachEntityTypeDirective extends AbstractPortDirective {

  @Input('mgForeachEntityType') port: string;

  constructor(
    private domain: DomainService,
    private metadata: MetadataService,
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver
  ) {
    super(componentTarget, compiler);
  }

  public refreshContent() {
    super.refreshContent();

    this.domain.listEntityTypes().forEach((entityType) => {
      let componentType = this.metadata.getWidget(entityType, this.port);
      let componentRef = this.createComponent(componentType);
      componentRef.instance.entitytype = entityType;
    });
  }

}
