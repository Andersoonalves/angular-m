import { Injectable } from '@angular/core';

import { EntityType } from './entity.type';

@Injectable()
export class MetadataService {

  private entityTypes: EntityType [] = [];

  describe(name: string): EntityType {
    let entityType: EntityType = new EntityType(name);
    this.entityTypes.push(entityType);
    return entityType;
  }

  findEntityType(name: string): EntityType {
    this.entityTypes.forEach( entityType => {
      if (entityType.name === name) {
        return entityType;
      }
    });
    throw `EntityType not found for name ${name}`;
  }

  listEntityTypes(): EntityType[] {
      return this.entityTypes;
  }
}
