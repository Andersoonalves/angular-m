import { Component, Input } from '@angular/core';

import { PropertyTypeComponent } from '../../meta/propertytype.component';

@Component({
    selector: 'mg-th',
    template: '<th>{{propertytype.name | titleCase}}</th>',
})
export class ThComponent extends PropertyTypeComponent { }
