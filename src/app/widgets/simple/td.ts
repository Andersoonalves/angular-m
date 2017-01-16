import { Component } from '@angular/core';

import { PropertyComponent } from '../../meta/property.component';

@Component({
    selector: 'td [mgTd]',
    template: '{{property.value}}',
})
export class TdComponent extends PropertyComponent { }
