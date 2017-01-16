import { ViewContainerRef, Directive } from '@angular/core';
import { ComponentFactoryResolver, Input } from '@angular/core';

import { AbstractPortDirective } from './abstract.port.directive';

import { RuleService } from '../widgets/rule.service';
import { DomainService } from '../domain/domain.service';


@Directive({
  selector: '[mgForeachEntityType]'
})
export class ForeachEntityTypeDirective extends AbstractPortDirective {

  @Input('mgForeachEntityType') port: string;

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

    this.domain.listEntityTypes().forEach((entityType) => {
      let widgetConnection = this.rule.getEntityTypeWidget(entityType, this.port);
      let componentRef = this.createComponent(widgetConnection.widget);
      componentRef.instance.entitytype = entityType;
      componentRef.instance.configuration = (widgetConnection.configuration) ? widgetConnection.configuration : {};
    });
  }

}
