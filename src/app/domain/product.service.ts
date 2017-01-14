import { InMemoryService } from '../meta/inmemory.service';
import { EntityType, Entity } from '../meta/entity.type';


let productEntityType = 
    new EntityType('product', 'products', { id: "id" })
        .property('id', 'number')
        .property('name', 'string');


export class Product extends Entity {
    constructor(public id: number, public name: string) {
        super(id, productEntityType);
    }
}

export class ProductService extends InMemoryService {

    constructor() {
        super();
        this.data.push(new Product(1, 'Banana'));
        this.data.push(new Product(2, 'iPhone'));
        this.data.push(new Product(3, 'Fiat Toro'));
        this.data.push(new Product(4, 'A380'));
        this.data.push(new Product(5, 'Netflix subscription'));
        this.data.push(new Product(6, 'AWS EC2 small instance'));
    }

    describeEntityType(): EntityType {
        return productEntityType;
    }
}
