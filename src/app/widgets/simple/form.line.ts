import { Component } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'mg-form-line',
    template:
        `<input 
            type="{{configuration.inputType}}"
            id="{{propertyType.entityType.singular}}_{{propertyType.name}}" 
            placeholder="{{propertyType.name | titleCase}}"
            [formControl]="mgFormControl">
        <br>`,
})
export class FormLineComponent extends PropertyTypeComponent { }
