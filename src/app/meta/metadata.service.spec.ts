import { MetadataService } from './metadata.service';
import { MetadataServiceHelper } from './metadata.helper';
import { EntityType } from './entity.type';
import { PlainTextComponent } from '../widgets/simple/plain';
import { BoldTextComponent } from '../widgets/simple/bold';

describe( 'Service: MetadataService', () => {

    let helper: MetadataServiceHelper;
    let service: MetadataService;

    beforeEach( () => {
        service = new MetadataService();
        helper = new MetadataServiceHelper(service);
    });

    it( 'Without entities', () => {
        helper.checkService();
        helper.checkEntityTypes(0);
    });

    it( 'Add entities', () => {
        service.addEntityType(new EntityType('Product', 'Products')
            .property('description', 'string')
            .property('price', 'number'));

        service.addEntityType(new EntityType('Customer', 'Customers')
            .property('name', 'string')
            .property('birthdate', 'date'));

        helper.checkService();
        helper.checkEntityTypes(2, 'Product', 'Customer');
    });

    it( 'Add rules', () => {
        service.addEntityType(new EntityType('Product', 'Products')
            .property('description', 'string')
            .property('price', 'number'));

        service.addEntityType(new EntityType('Customer', 'Customers')
            .property('name', 'string')
            .property('birthdate', 'date'));

        service.addRule('entitieslist', 'Product', BoldTextComponent);
        service.addRule('entitieslist', '*', PlainTextComponent);

        expect(service.findEntityTypeTemplate('Product', 'entitieslist'))
            .toBe(BoldTextComponent);
        expect(service.findEntityTypeTemplate('Customer', 'entitieslist'))
            .toBe(PlainTextComponent);
    });

});




