import { AbstractService } from '../meta/abstract.service';
import { EntityType } from '../meta/entity.type';

export class Client {
  constructor(public id: number, public name: string) { }
}

let CLIENTS = [
  new Client(1, 'John'),
  new Client(2, 'Mary'),
  new Client(3, 'Bill'),
];

let clientsPromise = Promise.resolve(CLIENTS);

export class ClientService extends AbstractService<Client> {

    listAll() {
        return clientsPromise;
    }

    findUnique(id: number | string) {
        return clientsPromise
            .then(clients => clients.find(client => client.id === +id));
    }

    describeEntityType(): EntityType {
        let entitytype = new EntityType('clients', 'Clients')
          .property('id', 'number')
          .property('name', 'string');
        return entitytype;
    }
}
