import { fdatasync } from 'fs';
import { AbstractService } from './abstract.service';
import { EntityType, Entity } from './entity.type';

export abstract class InMemoryService extends AbstractService {

    protected data: any[] = [];

    listAll() {
        return Promise.resolve(this.data);
    }

    findUnique(id: number | string) {
        return this.listAll()
            .then(items => items.find(item => item.id === +id));  //TO DO generalize key param
    }

    create(entity: any) {
        this.data.push(entity);
    }

}
