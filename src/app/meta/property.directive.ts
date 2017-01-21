import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AngularMService } from '../angular.m.service';
import { AbstractPortDirective } from './abstract.port.directive';
import { Property } from './entity.type';


@Directive({
  selector: '[mgProperty]'
})
export class PropertyDirective extends AbstractPortDirective implements OnInit {

  @Input('mgProperty') port: string;
  @Input() property: Property;
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
    
    this.createPropertyWidget(this.property, this.port, this.mgForm);
  }

}
