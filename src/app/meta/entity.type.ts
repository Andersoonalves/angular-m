export class EntityType {

    propertyTypes: PropertyType [] = [];

    constructor(public name: string) {}

    property(name: string, type: string): EntityType {
        this.propertyTypes.push(new PropertyType(this, name, type));
        return this;
    }

    get properties(): PropertyType [] {
        return this.propertyTypes;
    }
}

export class PropertyType {
    constructor(public entityType: EntityType, public name: string, public type: string) {}
}
