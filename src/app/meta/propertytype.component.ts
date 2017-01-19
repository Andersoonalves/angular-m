import { FormControl } from '@angular/forms';

import { PropertyType } from './entity.type';

export abstract class PropertyTypeComponent {

    public propertyType: PropertyType;
    public mgFormControl: FormControl;

};
