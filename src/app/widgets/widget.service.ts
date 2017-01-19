import { Injectable, Type } from '@angular/core';

import { AngularMService } from '../angular.m.service';
import { EntityTypeRouterComponent } from '../entitytype.router';
import { ThComponent } from './simple/th';
import { FormLineComponent } from './simple/form.line';
import { EditFormLineComponent } from './simple/edit.form.line';
import { ShowLineComponent } from './simple/show.line';
import { EntityLineComponent } from './simple/entity.line';
import { TdComponent } from './simple/td';

@Injectable()
export class WidgetService {

  constructor(angularm: AngularMService) {
    angularm.addDefaultEntityTypeRule('entitytypes_menu', EntityTypeRouterComponent);
    angularm.addDefaultPropertyTypeRule('table_head', ThComponent);
    angularm.addPropertyTypeRule('form_line', '*', 'matricula', null, FormLineComponent, { inputType: 'number'});
    angularm.addDefaultPropertyTypeRule('form_line', FormLineComponent, { inputType: 'text'});
    angularm.addDefaultPropertyRule('show_line', ShowLineComponent);
    angularm.addDefaultEntityRule('table_line', EntityLineComponent);
    angularm.addDefaultPropertyRule('table_cell', TdComponent);
    angularm.addPropertyRule('edit_form_line', '*', 'matricula', null, EditFormLineComponent, { inputType: 'number'});
    angularm.addDefaultPropertyRule('edit_form_line', EditFormLineComponent, { inputType: 'text'});
  }

}
