import { Component } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'mg-form-line',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}">{{propertyType.name | titleCase}}</label>
        <input 
            type="{{configuration.inputType}}"
            id="{{propertyType.entityType.singular}}_{{propertyType.name}}" 
            placeholder="{{propertyType.name | titleCase}}"
            [formControl]="mgFormControl"
            ngModel>
        <br>`,
})
export class FormLineComponent extends PropertyTypeComponent { }
