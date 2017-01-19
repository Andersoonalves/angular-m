import { Injectable, Type } from '@angular/core';

import { RuleService } from './rule.service';

import { EntityTypeRouterComponent } from '../entitytype.router';
import { ThComponent } from './simple/th';
import { FormLineComponent } from './simple/form.line';
import { EditFormLineComponent } from './simple/edit.form.line';
import { ShowLineComponent } from './simple/show.line';
import { EntityLineComponent } from './simple/entity.line';
import { TdComponent } from './simple/td';

@Injectable()
export class WidgetService {

  constructor(ruleService: RuleService) {
    ruleService.addDefaultEntityTypeRule('entitytypes_menu', EntityTypeRouterComponent);
    ruleService.addDefaultPropertyTypeRule('table_head', ThComponent);
    ruleService.addPropertyTypeRule('form_line', '*', 'matricula', null, FormLineComponent, { inputType: 'number'});
    ruleService.addDefaultPropertyTypeRule('form_line', FormLineComponent, { inputType: 'text'});
    ruleService.addDefaultPropertyRule('show_line', ShowLineComponent);
    ruleService.addDefaultEntityRule('table_line', EntityLineComponent);
    ruleService.addDefaultPropertyRule('table_cell', TdComponent);
    ruleService.addPropertyRule('edit_form_line', '*', 'matricula', null, EditFormLineComponent, { inputType: 'number'});
    ruleService.addDefaultPropertyRule('edit_form_line', EditFormLineComponent, { inputType: 'text'});
  }

}
