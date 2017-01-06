import { Component, Input } from '@angular/core';

import { EntityType } from './entity.type';

export abstract class EntityTypeComponent {

    @Input()  public entitytype: EntityType;
};
