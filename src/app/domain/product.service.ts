import { Injectable } from '@angular/core';

import { AbstractService } from '../meta/abstract.service';
import { EntityType } from '../meta/entity.type';

export class Product {
  constructor(public id: number, public name: string) { }
}

let PRODUCTS = [
  new Product(1, 'Banana'),
  new Product(2, 'iPhone'),
  new Product(3, 'Fiat Toro'),
  new Product(4, 'A380'),
  new Product(5, 'Netflix subscription'),
  new Product(6, 'AWS EC2 small instance')
];

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable() // TODO try moving this decorator to superclass
export class ProductService extends AbstractService<Product> {

    listAll() {
        return productsPromise;
    }

    findUnique(id: number | string) {
        return productsPromise
            .then(products => products.find(product => product.id === +id));
    }

    describeEntityType(): EntityType {
        let entitytype = new EntityType('Product', 'Products')
          .property('id', 'number')
          .property('name', 'string');
        return entitytype;
    }
}
