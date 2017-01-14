import { EntityType } from '../../meta/entity.type';
import { Component, Input } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'mg-form-line',
    template: 
        `<label for="{{propertytype.entityType.singular}}_{{propertytype.name}}">{{propertytype.name | titleCase}}</label>
        <input 
            type="text"
            id="{{propertytype.entityType.singular}}_{{propertytype.name}}" 
            placeholder="{{propertytype.name | titleCase}}"
            [formControl]="mgFormControl"
            ngModel>
        <br>`,
})
export class FormLineComponent extends PropertyTypeComponent { }
