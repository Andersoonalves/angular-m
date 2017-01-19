import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AngularMService } from '../angular.m.service';
import { AbstractPortDirective } from './abstract.port.directive';
import { Entity, Property } from './entity.type';


@Directive({
  selector: '[mgForeachProperty]'
})
export class ForeachPropertyDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachProperty') port: string;
  @Input() entity: Entity;
  @Input() mgForm: FormGroup;

  constructor(
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver,
    angularm: AngularMService
  ) {
    super(componentTarget, compiler, angularm);
  }


  public refreshContent() {
    super.refreshContent();

    this.foreachProperty(this.entity, (property) => { 
      this.createPropertyWidget(property, this.port, this.mgForm);
    });
  }

}
