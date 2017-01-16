export class EntityType {

    propertyTypes: PropertyType [] = [];

    constructor(public singular: string, public plural: string, public tags: any) {
        if (!tags.id) {
            throw `Tag id is mandatory to set the primary key of ${singular} Entity`;
        }
    }

    property(name: string, type: string): EntityType {
        this.propertyTypes.push(new PropertyType(this, name, type));
        return this;
    }

    get properties(): PropertyType [] {
        return this.propertyTypes;
    }
}

export class PropertyType {
    constructor(public entityType: EntityType, public name: string, public type: string, public tags?: any) {}
}

export class Entity {

    constructor(public entityType: EntityType, public properties: any) { }

    get key(): any {
        let keyName = this.entityType.tags.id;
        return this.properties[keyName];
    }

}

export class Property {
    constructor(public entity: Entity, public propertyType: PropertyType, public value: any) {}
}
