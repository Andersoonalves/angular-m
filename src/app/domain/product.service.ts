import { InMemoryService } from '../meta/inmemory.service';
import { EntityType, Entity } from '../meta/entity.type';


let productEntityType =
    new EntityType('product', 'products', { id: 'id' })
        .property('id', 'number')
        .property('name', 'string');


export class Product extends Entity {
    constructor(public id: number, public name: string) {
        super(productEntityType, {id: id, name: name});
    }
}

export class ProductService extends InMemoryService {

    describeEntityType(): EntityType {
        return productEntityType;
    }
}
