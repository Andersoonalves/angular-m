import { InMemoryService } from '../meta/inmemory.service';
import { EntityType, Entity } from '../meta/entity.type';

export class Client extends Entity {
    constructor(public id: number, public name: string) {
        super(id);
    }
}

export class ClientService extends InMemoryService<Client> {

    constructor() {
        super();
        this.data.push(new Client(1, 'John'));
        this.data.push(new Client(2, 'Mary'));
        this.data.push(new Client(3, 'Bill'));
    }

    describeEntityType(): EntityType {
        let entitytype = new EntityType('client', 'clients', 'Clients')
            .property('id', 'number')
            .property('name', 'string');
        return entitytype;
    }
}
