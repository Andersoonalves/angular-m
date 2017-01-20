import { AngularMPage } from '../../../e2e/app.po';
import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AngularMService } from '../angular.m.service';
import { AbstractPortDirective } from './abstract.port.directive';
import { EntityType } from './entity.type';


@Directive({
  selector: '[mgForeachPropertyType]'
})
export class ForeachPropertyTypeDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachPropertyType') port: string;
  @Input() entityType: EntityType;
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

    this.foreachPropertyType(this.entityType, (propertyType) => {
      this.createPropertyTypeWidget(propertyType, this.port, this.mgForm);
    });
  }

}
