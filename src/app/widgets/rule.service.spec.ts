import { DomainService } from '../domain/domain.service';
import { RuleService, EntityTypeRuleService, PropertyTypeRuleService } from './rule.service';
import { EntityType } from '../meta/entity.type';
import { PlainTextComponent } from './simple/plain';
import { BoldTextComponent } from './simple/bold';

describe( 'Service: MetadataService', () => {

    let service: RuleService;

    beforeEach( () => {
        service = new RuleService(new EntityTypeRuleService(), new PropertyTypeRuleService());
    });

    it( 'Add rules', () => {
        let productET = new EntityType('Product', 'Products');
        let customerET = new EntityType('Customer', 'Customers');


        service.addEntityTypeRule('entitieslist', productET.name, BoldTextComponent);
        service.addDefaultEntityTypeRule('entitieslist', PlainTextComponent);

        expect(service.getEntityTypeWidget(productET, 'entitieslist'))
            .toBe(BoldTextComponent);
        expect(service.getEntityTypeWidget(customerET, 'entitieslist'))
            .toBe(PlainTextComponent);
    });

});




