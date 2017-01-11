import { InMemoryService } from '../meta/inmemory.service';
import { EntityType, Entity } from '../meta/entity.type';

export class Product extends Entity {
    constructor(public id: number, public name: string) {
        super(id);
    }
}

export class ProductService extends InMemoryService<Product> {

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
        let entitytype = new EntityType('product', 'products', 'Products')
            .property('id', 'number')
            .property('name', 'string');
        return entitytype;
    }
}
