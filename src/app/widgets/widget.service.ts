import { Injectable, Type } from '@angular/core';

import { RuleService } from './rule.service';

import { EntityTypeRouterComponent } from '../widgets/router/entitytype.router';

@Injectable()
export class WidgetService {

  constructor(ruleService: RuleService) {
    ruleService.addRule('entitytypes_menu', '*', EntityTypeRouterComponent);
  }

}
