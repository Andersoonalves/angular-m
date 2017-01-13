import { EntityType } from '../../meta/entity.type';
import { Component, Input } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'mg-form-line',
    template: 
        `<label>{{propertytype.name | titleCase}}</label>
        <input id="{{propertytype.entityType.singular}}_{{propertytype.name}}"type="text"><br>`,
})
export class FormLineComponent extends PropertyTypeComponent { }
