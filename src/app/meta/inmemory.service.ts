import { AbstractService } from './abstract.service';
import { EntityType, Entity } from './entity.type';

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
                return item.properties[idPropertyType] === id;
            }));
    }

    create(properties: Entity) {
        let entity = new Entity(this.describeEntityType(), properties);
        console.debug('create', entity);
        this.data.push(entity);
    }

}
