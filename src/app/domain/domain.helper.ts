import { DomainLayer } from './domain.layer';
import { EntityType } from '../meta/entity.type';

export class DomainLayerHelper {


    constructor(private service: DomainLayer) {
    }

    checkService() {
        expect(this.service).toBeTruthy();
    }

    checkEntityTypes(length: number, ...entityTypeNames: string []) {
        let entityTypes = this.service.listEntityTypes();
        expect(entityTypes).toBeTruthy();
        expect(entityTypes.length).toBe(length);

        entityTypeNames.forEach( (entityTypeName, index) => {
            expect(entityTypes[index].plural).toBe(entityTypeName);
        });
    }

    checkEntityType(entityTypeName: string, tags: any) {
        this.service.findEntityType(entityTypeName).then(
            (entityType: EntityType) => {
                expect(entityType).toBeTruthy();
                expect(entityType.tags).toBe(tags);
            }
        );
    }

}
