import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';

import { AngularMService } from '../angular.m.service';
import { AbstractPortDirective } from './abstract.port.directive';
import { EntityType } from './entity.type';


@Directive({
  selector: '[mgForeachEntity]'
})
export class ForeachEntityDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachEntity') port: string;
  @Input() entitytype: EntityType;

  constructor(
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver, 
    angularm: AngularMService
  ) {
    super(componentTarget, compiler, angularm);
  }


  public refreshContent() {
    super.refreshContent();

    this.foreachEntity(this.entitytype, (entity) => {
      this.createEntityWidget(entity, this.port);
    });
  }

}
