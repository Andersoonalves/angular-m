import { AbstractDAO } from './abstract.dao';
import { EntityType, Entity } from '../meta/entity.type';
import { TitleCase } from '../pipes/titlecase.pipe';

export class InMemoryDAO extends AbstractDAO {

    protected data: any[] = [];
    
    constructor(public entityType: EntityType) {
        super(entityType);
    }


    listAll() {
        return Promise.resolve(this.data);
    }

    findUnique(id: number | string) {
        let entityType: EntityType = this.entityType;
        let idPropertyType: string = entityType.tags.id;
        return this.listAll()
            .then(items => items.find(item => {
                return item.properties[idPropertyType] === id;
            }));
    }

    create(properties: Entity) {
        let entity = new Entity(this.entityType, properties);
        this.data.push(entity);
    }

    edit(key: any, properties: Entity) {
        let entity = new Entity(this.entityType, properties);
        this.findUnique(key).then(
            oldEntity => oldEntity.properties = entity.properties
        );
    }

    delete(key: any) {
        for (let i = 0; i < this.data.length; i++) {
            let item = this.data[i];
            if (item.key === key) {
                this.data.splice(i, 1);
                return;
            }
        }

        let entityType: EntityType = this.entityType;
        let entityTypeName = TitleCase.toTitleCase(entityType.singular);
        throw `${entityTypeName} ${key} not found`;
    }

}
