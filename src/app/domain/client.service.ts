import { InMemoryService } from '../meta/inmemory.service';
import { EntityType, Entity } from '../meta/entity.type';


let clientEntityType = 
    new EntityType('client', 'clients', { id: "id"})
        .property('id', 'number')
        .property('name', 'string');


export class Client extends Entity {
    constructor(public id: number, public name: string) {
        super(id, clientEntityType);
    }
}

export class ClientService extends InMemoryService {

    constructor() {
        super();
        this.data.push(new Client(1, 'John'));
        this.data.push(new Client(2, 'Mary'));
        this.data.push(new Client(3, 'Bill'));
    }

    describeEntityType(): EntityType {
        return clientEntityType;
    }
}
