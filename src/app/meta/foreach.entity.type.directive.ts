import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input } from '@angular/core';

import { AngularMService } from '../angular.m.service';
import { AbstractPortDirective } from './abstract.port.directive';


@Directive({
  selector: '[mgForeachEntityType]'
})
export class ForeachEntityTypeDirective extends AbstractPortDirective {

  @Input('mgForeachEntityType') port: string;

  constructor(
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver,
    angularm: AngularMService
  ) {
    super(componentTarget, compiler, angularm);
  }

  public refreshContent() {
    super.refreshContent();

    this.foreachEntityType( (entityType) => {
      this.createEntityTypeWidget(entityType, this.port);
    });
  }

}
