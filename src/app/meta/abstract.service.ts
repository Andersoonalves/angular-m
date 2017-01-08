import { Injectable } from '@angular/core';

import { EntityType } from './entity.type';

@Injectable()
export abstract class AbstractService<T> {

    abstract listAll(): Promise<T[]>;
    abstract findUnique(id: number | string): Promise<T>;

    abstract describeEntityType(): EntityType;

}
