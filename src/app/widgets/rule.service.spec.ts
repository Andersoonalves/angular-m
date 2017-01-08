import { DomainService } from '../domain/domain.service';
import { RuleService } from './rule.service';
import { EntityType } from '../meta/entity.type';
import { PlainTextComponent } from './simple/plain';
import { BoldTextComponent } from './simple/bold';

describe( 'Service: MetadataService', () => {

    let service: RuleService;

    beforeEach( () => {
        service = new RuleService();
    });

    it( 'Add rules', () => {
        service.addRule('entitieslist', 'Product', BoldTextComponent);
        service.addRule('entitieslist', '*', PlainTextComponent);

        expect(service.findEntityTypeTemplate('Product', 'entitieslist'))
            .toBe(BoldTextComponent);
        expect(service.findEntityTypeTemplate('Customer', 'entitieslist'))
            .toBe(PlainTextComponent);
    });

});




