import { AngularMService } from './angular.m.service';

import { ThComponent } from './widgets/simple/th';
import { FormLineComponent } from './widgets/simple/form.line';
import { EditFormLineComponent } from './widgets/simple/edit.form.line';
import { ShowLineComponent } from './widgets/simple/show.line';
import { EntityLineComponent } from './widgets/simple/entity.line';
import { TdComponent } from './widgets/simple/td';

export let defineRules = (angularm: AngularMService) => {
    angularm
        .dptr('table_head', ThComponent)
        .ptr('form_line', '*', 'matricula', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .der('table_line', EntityLineComponent)
        .dpr('table_cell', TdComponent)
        .pr('edit_form_line', '*', 'matricula', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
