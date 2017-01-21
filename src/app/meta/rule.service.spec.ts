import { RuleService, EntityTypeRuleService, PropertyTypeRuleService, PropertyRuleService } from './rule.service';
import { EntityType } from '../meta/entity.type';
import { PlainTextComponent } from '../widgets/simple/plain';
import { BoldTextComponent } from '../widgets/simple/bold';

describe( 'Service: MetadataService', () => {

    let service: RuleService;
    let fakeTags = { id: 'id' };

    beforeEach( () => {
        service = new RuleService();
    });

    it( 'Add rules', () => {
        let productET = new EntityType('product', 'products', fakeTags);
        let customerET = new EntityType('customer', 'customers', fakeTags);


        service.addEntityTypeRule('entitieslist', productET.singular, BoldTextComponent);
        service.addDefaultEntityTypeRule('entitieslist', PlainTextComponent);

        expect(service.getEntityTypeWidget(productET, 'entitieslist').widget)
            .toBe(BoldTextComponent);
        expect(service.getEntityTypeWidget(customerET, 'entitieslist').widget)
            .toBe(PlainTextComponent);
    });

    it( 'With configuration', () => {
        let productET = new EntityType('product', 'products', fakeTags);
        let branchET = new EntityType('branch', 'branches', fakeTags);
        let customerET = new EntityType('customer', 'customers', fakeTags);


        service.addEntityTypeRule('entitieslist', productET.singular, BoldTextComponent, {conf1: 'abc'});
        service.addEntityTypeRule('entitieslist', branchET.singular, BoldTextComponent, {conf2: 'def'});
        service.addDefaultEntityTypeRule('entitieslist', PlainTextComponent, {conf2: 'aaa'});

        let productWC = service.getEntityTypeWidget(productET, 'entitieslist');
        expect(productWC.widget).toBe(BoldTextComponent);
        expect(productWC.configuration.conf1).toBe('abc');

        let branchWC = service.getEntityTypeWidget(branchET, 'entitieslist');
        expect(branchWC.widget).toBe(BoldTextComponent);
        expect(branchWC.configuration.conf2).toBe('def');

        let customerWC = service.getEntityTypeWidget(customerET, 'entitieslist');
        expect(customerWC.widget).toBe(PlainTextComponent);
        expect(customerWC.configuration.conf2).toBe('aaa');
    });

});




