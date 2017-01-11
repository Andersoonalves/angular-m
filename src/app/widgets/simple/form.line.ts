import { Component, Input } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'mg-form-line',
    template: '<label>{{propertytype.name}}</label><input type="text"><br>',
})
export class FormLineComponent extends PropertyTypeComponent { }
