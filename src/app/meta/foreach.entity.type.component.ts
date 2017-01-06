import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';

import { AbstractPortComponent } from './abstract.port.component';
import { DynamicTypeBuilder } from './type.builder';
import { MetadataService } from './metadata.service';


@Component({
  selector: 'm-foreach-entity-type',
  template: `
<div>
  Check/uncheck to use PLAIN vs BOLD:
  <input type="checkbox" #bold (click)="refreshContent(bold.checked)" /><hr />
  <div #dynamicContentPlaceHolder></div>
</div>
`,
})
export class ForeachEntityTypeComponent extends AbstractPortComponent {

    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
    protected dynamicComponentTarget: ViewContainerRef;

    constructor(typeBuilder: DynamicTypeBuilder, metadata: MetadataService) {
      super(typeBuilder, metadata);
    }


    public refreshContent() {
      super.refreshContent();

      this.metadata.listEntityTypes().forEach( (entityType) => {
        let componentType = this.metadata.getWidget(entityType, this.port);
        this.typeBuilder
          .createComponentFactory(componentType)
          .then((factory: ComponentFactory<any>) => {
            let componentRef =
              this.dynamicComponentTarget.createComponent(factory);
            this.componentRefs.push(componentRef);
            let component = componentRef.instance;
            component.entitytype = entityType;
          });
        });
    }

}
