import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input } from '@angular/core';

import { AbstractPortDirective } from './abstract.port.directive';


@Directive({
  selector: '[mgForeachEntityType]'
})
export class ForeachEntityTypeDirective extends AbstractPortDirective {

  @Input('mgForeachEntityType') port: string;

  constructor(
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver
  ) {
    super(componentTarget, compiler);
  }

  public refreshContent() {
    super.refreshContent();

    this.forEachEntityType( (entityType) => {
      this.createEntityTypeWidget(entityType, this.port);
    });
  }

}
