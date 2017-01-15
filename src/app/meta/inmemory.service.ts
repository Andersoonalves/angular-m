import { fdatasync } from 'fs';
import { AbstractService } from './abstract.service';
import { EntityType, Entity, PropertyType } from './entity.type';

export abstract class InMemoryService extends AbstractService {

    protected data: any[] = [];


    listAll() {
        return Promise.resolve(this.data);
    }

    findUnique(id: number | string) {
        let entityType: EntityType = this.describeEntityType();
        let idPropertyType: string = entityType.tags.id;
        return this.listAll()
            .then(items => items.find(item => {
                return item[idPropertyType] === id;
            }));
    }

    create(entity: Entity) {
        entity.entityType = this.describeEntityType();
        this.data.push(entity);
    }

}
