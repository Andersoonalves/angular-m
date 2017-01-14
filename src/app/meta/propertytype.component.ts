import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PropertyType } from './entity.type';

export abstract class PropertyTypeComponent {

    public propertytype: PropertyType;
    public mgFormControl: FormControl;

};
