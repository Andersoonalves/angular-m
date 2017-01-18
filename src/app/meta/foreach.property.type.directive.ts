import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AbstractPortDirective } from './abstract.port.directive';
import { EntityType } from './entity.type';
import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachPropertyType]'
})
export class ForeachPropertyTypeDirective extends AbstractPortDirective implements OnInit {

  @Input('mgForeachPropertyType') port: string;
  @Input() entityType: EntityType;
  @Input() mgForm: FormGroup;

  constructor(
    private domain: DomainService,
    private rule: RuleService,
    componentTarget: ViewContainerRef,
    compiler: ComponentFactoryResolver
  ) {
    super(componentTarget, compiler);
  }


  public refreshContent() {
    super.refreshContent();

    this.entityType.propertyTypes.forEach((propertytype) => {
      let widgetConnection = this.rule.getPropertyTypeWidget(propertytype, this.port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.propertytype = propertytype;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
      if (this.mgForm) {
        componentRef.instance.mgFormControl = this.mgForm.controls[propertytype.name];
      }
    });
  }

}
