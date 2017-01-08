import { AbstractService } from './abstract.service';
import { EntityType, Entity } from './entity.type';

export abstract class InMemoryService<T extends Entity> extends AbstractService<T> {

    protected data: T[] = [];

    listAll() {
        return Promise.resolve(this.data);
    }

    findUnique(id: number | string) {
        return this.listAll()
            .then(items => items.find(item => item.id === +id));
    }

}
