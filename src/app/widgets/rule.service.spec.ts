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
        let productET = new EntityType('product', 'products');
        let customerET = new EntityType('customer', 'customers');


        service.addEntityTypeRule('entitieslist', productET.singular, BoldTextComponent);
        service.addDefaultEntityTypeRule('entitieslist', PlainTextComponent);

        expect(service.getEntityTypeWidget(productET, 'entitieslist').widget)
            .toBe(BoldTextComponent);
        expect(service.getEntityTypeWidget(customerET, 'entitieslist').widget)
            .toBe(PlainTextComponent);
    });

});




