import { Injectable, Type } from '@angular/core';

import { DomainService } from './domain/domain.service';
import { RuleService, WidgetConnection } from './widgets/rule.service';
import { EntityType, PropertyType, Entity, Property } from './meta/entity.type';
import { AbstractService } from './meta/abstract.service';


@Injectable()
export class AngularMService {

    private domain: DomainService;
    private rule: RuleService;

    constructor() {
        this.domain = new DomainService();
        this.rule = new RuleService();
    }

    listEntityTypes(): EntityType[] {
        return this.domain.listEntityTypes();
    }

    getService(entitytype: string): AbstractService {
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

    addDefaultEntityTypeRule(port: string, component: Type<any>, configuration?: any) {
        this.rule.addDefaultEntityTypeRule(port, component, configuration);
    }

    addEntityTypeRule(port: string, entitySelector: string, component: Type<any>, configuration?: any) {
        this.rule.addEntityTypeRule(port, entitySelector, component, configuration);
    }

    addDefaultPropertyTypeRule(port: string, component: Type<any>, configuration?: any) {
        this.rule.addDefaultPropertyTypeRule(port, component, configuration);
    }

    addPropertyTypeRule(port: string, entitySelector: string, propertySelector: string,
        propertyTypeTypeSelector: string, component: Type<any>, configuration?: any) {
        this.rule.addPropertyTypeRule(
            port, entitySelector, propertySelector, propertyTypeTypeSelector, component, configuration);
    }

    addDefaultPropertyRule(port: string, component: Type<any>, configuration?: any) {
        this.rule.addDefaultPropertyRule(port, component, configuration);
    }

    addPropertyRule(port: string, entitySelector: string, propertySelector: string,
        propertyTypeTypeSelector: string, component: Type<any>, configuration?: any) {
        this.rule.addPropertyRule(port, entitySelector, propertySelector, propertyTypeTypeSelector, component, configuration);
    }

    addDefaultEntityRule(port: string, component: Type<any>, configuration?: any) {
        this.rule.addDefaultEntityRule(port, component, configuration);
    }

    addEntityRule(port: string, entitySelector: string, component: Type<any>, configuration?: any) {
        this.rule.addEntityRule(port, entitySelector, component, configuration);
    }

}