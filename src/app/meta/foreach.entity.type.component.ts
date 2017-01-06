import { Component, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { AbstractPortComponent } from './abstract.port.component';
import { MetadataService } from './metadata.service';


@Component({
  selector: 'mg-foreach-entity-type',
  template: `<div #target></div>`,
})
export class ForeachEntityTypeComponent extends AbstractPortComponent {

    @ViewChild('target', {read: ViewContainerRef})
    protected componentTarget: ViewContainerRef;

    constructor(metadata: MetadataService,
        protected compiler: ComponentFactoryResolver) {
      super(metadata);
    }

    public refreshContent() {
      super.refreshContent();

      this.metadata.listEntityTypes().forEach( (entityType) => {
        let componentType = this.metadata.getWidget(entityType, this.port);
        let factory = this.compiler.resolveComponentFactory(componentType);
        let componentRef = this.componentTarget.createComponent(factory);
        this.componentRefs.push(componentRef);
        componentRef.instance.entitytype = entityType;
        });
    }

}
