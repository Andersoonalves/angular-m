import { DomainService } from '../domain/domain.service';
import { MetadataService } from './metadata.service';
import { MetadataServiceHelper } from './metadata.helper';
import { EntityType } from './entity.type';
import { PlainTextComponent } from '../widgets/simple/plain';
import { BoldTextComponent } from '../widgets/simple/bold';

describe( 'Service: MetadataService', () => {

    let helper: MetadataServiceHelper;
    let metadata: MetadataService;

    beforeEach( () => {
        metadata = new MetadataService();
        helper = new MetadataServiceHelper(metadata);
    });

    it( 'Add rules', () => {
        metadata.addRule('entitieslist', 'Product', BoldTextComponent);
        metadata.addRule('entitieslist', '*', PlainTextComponent);

        expect(metadata.findEntityTypeTemplate('Product', 'entitieslist'))
            .toBe(BoldTextComponent);
        expect(metadata.findEntityTypeTemplate('Customer', 'entitieslist'))
            .toBe(PlainTextComponent);
    });

});




