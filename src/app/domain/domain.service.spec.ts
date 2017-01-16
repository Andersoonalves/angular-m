import { DomainService } from './domain.service';
import { DomainServiceHelper } from './domain.helper';
import { ProductService} from './product.service';
import { ClientService} from './client.service';
import { AlunoService} from './aluno.service';
import { EntityType } from '../meta/entity.type';
import { RuleService } from '../widgets/rule.service';

describe( 'Service: DomainService', () => {

    let helper: DomainServiceHelper;
    let service: DomainService;

    beforeEach( () => {
        service = new DomainService(new ProductService(), new ClientService(), new AlunoService());
        helper = new DomainServiceHelper(service);
    });

    it( 'Initial entities', () => {
        helper.checkService();
        helper.checkEntityTypes(3, 'products', 'clients', 'alunos');
    });

    it( 'Add entities', () => {
        service.addEntityType(new EntityType('Car', 'cars', {id: 'description'})
            .property('description', 'string')
            .property('price', 'number'));

        service.addEntityType(new EntityType('Customer', 'Customers', {id: 'name'})
            .property('name', 'string')
            .property('birthdate', 'date'));

        helper.checkService();
        helper.checkEntityTypes(5, 'products', 'clients', 'alunos', 'cars', 'Customers');
    });

    it( 'Tags', () => {
        let carTags = {id: 'description', tag1: 'abc'};
        service.addEntityType(new EntityType('Car', 'cars', carTags)
            .property('description', 'string')
            .property('price', 'number'));

        let customerTags = {id: 'name', tag1: 'abc'};
        service.addEntityType(new EntityType('Customer', 'Customers', customerTags)
            .property('name', 'string')
            .property('birthdate', 'date'));

        helper.checkService();
        helper.checkEntityTypes(5, 'products', 'clients', 'alunos', 'cars', 'Customers');

        helper.checkEntityType('cars', carTags);
        helper.checkEntityType('Customers', customerTags);
    });

});
