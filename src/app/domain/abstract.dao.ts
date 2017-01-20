import { Injectable } from '@angular/core';

import { EntityType } from '../meta/entity.type';

export abstract class AbstractDAO {

    constructor(public entityType: EntityType) {}

    abstract listAll(): Promise<any[]>;
    
    abstract findUnique(id: number | string): Promise<any>;

    abstract create(properties: any);

    abstract edit(key: any, properties: any);

    abstract delete(key: any);
}
