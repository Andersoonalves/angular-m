import { MetadataService } from './metadata.service';
import { MetadataServiceHelper } from './metadata.helper';

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
        service.describe('Product')
            .property('description', 'string')
            .property('price', 'number');

        service.describe('Customer')
            .property('name', 'string')
            .property('birthdate', 'date');

        helper.checkService();
        helper.checkEntityTypes(2, 'Product', 'Customer');
    });



});




