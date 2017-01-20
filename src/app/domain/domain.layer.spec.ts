import { DomainLayer } from './domain.layer';
import { DomainLayerHelper } from './domain.helper';
import { EntityType } from '../meta/entity.type';

describe( 'Layer: DomainLayer', () => {

    let helper: DomainLayerHelper;
    let service: DomainLayer;

    beforeEach( () => {
        service = new DomainLayer();
        helper = new DomainLayerHelper(service);
    });

    it( 'Initial entities', () => {
        helper.checkService();
        helper.checkEntityTypes(0);
    });

    it( 'Add entities', () => {
        service.addEntityType(new EntityType('Car', 'cars', {id: 'description'})
            .pt('description', 'string')
            .pt('price', 'number'));

        service.addEntityType(new EntityType('Customer', 'Customers', {id: 'name'})
            .pt('name', 'string')
            .pt('birthdate', 'date'));

        helper.checkService();
        helper.checkEntityTypes(2, 'cars', 'Customers');
    });

    it( 'Tags', () => {
        let carTags = {id: 'description', tag1: 'abc'};
        service.addEntityType(new EntityType('Car', 'cars', carTags)
            .pt('description', 'string')
            .pt('price', 'number'));

        let customerTags = {id: 'name', tag1: 'abc'};
        service.addEntityType(new EntityType('Customer', 'Customers', customerTags)
            .pt('name', 'string')
            .pt('birthdate', 'date'));

        helper.checkService();
        helper.checkEntityTypes(2, 'cars', 'Customers');

        helper.checkEntityType('cars', carTags);
        helper.checkEntityType('Customers', customerTags);
    });

});
