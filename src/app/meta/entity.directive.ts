import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';

import { AngularMService } from '../angular.m.service';
import { AbstractPortDirective } from './abstract.port.directive';
import { Entity } from './entity.type';


@Directive({
  selector: '[mgEntity]'
})
export class EntityDirective extends AbstractPortDirective implements OnInit {

  @Input('mgEntity') port: string;
  @Input() entity: Entity;

  constructor(
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver,
    angularm: AngularMService
  ) {
    super(componentTarget, compiler, angularm);
  }


  public refreshContent() {
    super.refreshContent();

    this.createEntityWidget(this.entity, this.port);
  }

}
