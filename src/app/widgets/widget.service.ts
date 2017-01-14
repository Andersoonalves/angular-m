import { Injectable, Type } from '@angular/core';

import { RuleService } from './rule.service';

import { EntityTypeRouterComponent } from '../widgets/router/entitytype.router';
import { ThComponent } from '../widgets/simple/th';
import { FormLineComponent } from '../widgets/simple/form.line';

@Injectable()
export class WidgetService {

  constructor(ruleService: RuleService) {
    ruleService.addDefaultEntityTypeRule('entitytypes_menu', EntityTypeRouterComponent);
    ruleService.addDefaultPropertyTypeRule('table_head', ThComponent);
    ruleService.addDefaultPropertyTypeRule('form_line', FormLineComponent);
  }

}
