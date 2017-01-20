import { Injectable, Type } from '@angular/core';

import { DomainLayer } from './domain/domain.layer';
import { RuleService, WidgetConnection } from './widgets/rule.service';
import { EntityType, PropertyType, Entity, Property } from './meta/entity.type';
import { AbstractDAO } from './domain/abstract.dao';
import { InMemoryDAO } from './domain/inmemory.dao';


@Injectable()
export class AngularMService {

    private domain: DomainLayer;
    private rule: RuleService;

    constructor() {
        this.domain = new DomainLayer();
        this.rule = new RuleService();
    }

    describeDomain(... entityTypes: EntityType[]) {
        entityTypes.forEach((entityType: EntityType) => {
            this.addService(new InMemoryDAO(entityType));

        });
    }

    listEntityTypes(): EntityType[] {
        return this.domain.listEntityTypes();
    }

    addService(service: AbstractDAO) {
        this.domain.addService(service);
    }

    getService(entitytype: string): AbstractDAO {
        return this.domain.getService(entitytype);
    }

    findEntityType(name: string): Promise<EntityType> {
        return this.domain.findEntityType(name);
    }

    getEntityTypeWidget(entityType: EntityType, port: string): WidgetConnection {
        return this.rule.getEntityTypeWidget(entityType, port);
    }

    getPropertyTypeWidget(propertyType: PropertyType, port: string): WidgetConnection {
        return this.rule.getPropertyTypeWidget(propertyType, port);
    }

    getPropertyWidget(property: Property, port: string): WidgetConnection {
        return this.rule.getPropertyWidget(property, port);
    }

    getEntityWidget(entityType: EntityType, port: string): WidgetConnection {
        return this.rule.getEntityWidget(entityType, port);
    }

    detr(port: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addDefaultEntityTypeRule(port, component, configuration);
        return this;
    }

    etr(port: string, entitySelector: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addEntityTypeRule(port, entitySelector, component, configuration);
        return this;
    }

    dptr(port: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addDefaultPropertyTypeRule(port, component, configuration);
        return this;
    }

    ptr(port: string, entitySelector: string, propertySelector: string,
        propertyTypeTypeSelector: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addPropertyTypeRule(
            port, entitySelector, propertySelector, propertyTypeTypeSelector, component, configuration);
        return this;
    }

    dpr(port: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addDefaultPropertyRule(port, component, configuration);
        return this;
    }

    pr(port: string, entitySelector: string, propertySelector: string,
        propertyTypeTypeSelector: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addPropertyRule(port, entitySelector, propertySelector, propertyTypeTypeSelector, component, configuration);
        return this;
    }

    der(port: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addDefaultEntityRule(port, component, configuration);
        return this;
    }

    er(port: string, entitySelector: string, component: Type<any>, configuration?: any): AngularMService {
        this.rule.addEntityRule(port, entitySelector, component, configuration);
        return this;
    }

}

export let et = (singular: string, plural: string, tags?: any, ... propertyTypes: PropertyType[]): EntityType => {
    return new EntityType(singular, plural, tags);
};
