import { FormControl } from '@angular/forms';

import { Property} from './entity.type';

export abstract class PropertyComponent {

    public property: Property;
    public mgFormControl: FormControl;

};
