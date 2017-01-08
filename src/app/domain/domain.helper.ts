import { DomainService } from './domain.service';

export class DomainServiceHelper {

    constructor(private service: DomainService) {}

    checkService() {
        expect(this.service).toBeTruthy();
    }

    checkEntityTypes(length: number, ...entityTypeNames: string []) {
        let entityTypes = this.service.listEntityTypes();
        expect(entityTypes).toBeTruthy();
        expect(entityTypes.length).toBe(length);

        entityTypeNames.forEach( (entityTypeName, index) => {
            expect(entityTypes[index].name).toBe(entityTypeName);
        });
    }
}
