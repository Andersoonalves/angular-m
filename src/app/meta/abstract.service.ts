import { Injectable } from '@angular/core';

import { EntityType } from './entity.type';

@Injectable()
export abstract class AbstractService {

    abstract listAll(): Promise<any[]>;
    abstract findUnique(id: number | string): Promise<any>;

    abstract describeEntityType(): EntityType;

    abstract create(properties: any);

    abstract edit(key: any, properties: any);
}
