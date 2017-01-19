import * as domain from 'domain';
import { ReflectiveInjector, Injector } from '@angular/core';

import { EntityType } from './entity.type';

export abstract class EntityTypeComponent {

    public entityType: EntityType;
    entities: any[] = [];


};
