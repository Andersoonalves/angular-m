import { Injectable, Type } from '@angular/core';

import { EntityType, PropertyType } from '../meta/entity.type';


export enum WidgetType {
  EntityType,
  PropertyType,
  RelationshipType,
  FieldType,
  Entity,
  Property,
  Relationship,
  Field
}


export abstract class Rule {

  constructor(public port: string, public entitySelector: string, public component: Type<any>) { }

  abstract hasDefaultScope(): boolean;

  abstract getWidgetType(): WidgetType;
}


@Injectable()
export class AbstractRuleService<T extends Rule> {

  protected rules: T[] = [];

  addRule(rule: T) {
    this.rules.push(rule);
  }

  protected matchExpression(text, expression): boolean {
    return (expression)
      ? new RegExp('^' + expression.split('*').join('.*') + '$').test(text)
      : false;
  }

  protected checkDefaultScope(defaultScope: Rule, port: string) {
    if (!defaultScope) {
      throw `There is not default Widget for port ${port}`;
    }
  }
}


export const DEFAULT_SCOPE = '*';


class EntityTypeRule extends Rule {
  constructor(port: string, entitySelector: string, component: Type<any>) {
    super(port, entitySelector, component);
  };

  hasDefaultScope(): boolean {
    return DEFAULT_SCOPE === this.entitySelector;
  }

  getWidgetType(): WidgetType {
    return WidgetType.EntityType;
  }
}


@Injectable()
export class EntityTypeRuleService extends AbstractRuleService<EntityTypeRule> {

  getWidget(entityType: EntityType, port: string): Type<any> {
    let defaultScope: Rule;
    let matchName: Rule;

    this.rules.forEach(rule => {
      if (rule.port === port) {
        if (rule.hasDefaultScope()) {
          defaultScope = rule;
        } else if (this.matchExpression(entityType.singular, rule.entitySelector)) {
          matchName = rule;
        }
      }
    });

    this.checkDefaultScope(defaultScope, port);

    return (matchName) ? matchName.component : defaultScope.component;
  }

}


class PropertyTypeRule extends Rule {
  constructor(port: string, entitySelector: string, public propertySelector: string,
      public propertyTypeTypeSelector: string, component: Type<any>) {
    super(port, entitySelector, component);
  };

  hasDefaultScope(): boolean {
    return DEFAULT_SCOPE === this.entitySelector && DEFAULT_SCOPE === this.propertySelector;
  }

  getWidgetType(): WidgetType {
    return WidgetType.PropertyType;
  }
}


@Injectable()
export class PropertyTypeRuleService extends AbstractRuleService<PropertyTypeRule> {

  getWidget(propertyType: PropertyType, port: string): Type<any> {
    let defaultScope: PropertyTypeRule;
    let matchScope: PropertyTypeRule;
    let matchType: PropertyTypeRule;

    this.rules.forEach(rule => {
      if (rule.port === port) {
        if (rule.propertyTypeTypeSelector) {
          if (this.matchExpression(propertyType.entityType.singular, rule.entitySelector)
              && this.matchExpression(propertyType.name, rule.propertySelector)
              && propertyType.type === rule.propertyTypeTypeSelector) {
            matchType = rule;
          }
        } else if (rule.hasDefaultScope()) {
          defaultScope = rule;
        } else if (this.matchExpression(propertyType.entityType.singular, rule.entitySelector)
              && this.matchExpression(propertyType.name, rule.propertySelector)) {
          matchScope = rule;
        }
      }
    });

    this.checkDefaultScope(defaultScope, port);

    return (matchType)
        ? matchType.component
        : (matchScope)
            ? matchScope.component
            : defaultScope.component;
  }

}


@Injectable()
export class RuleService {

  constructor(
    private entityTypeRuleService: EntityTypeRuleService,
    private propertyTypeRuleService: PropertyTypeRuleService
  ) { }

  addDefaultEntityTypeRule(port: string, component: Type<any>) {
    this.addEntityTypeRule(port, DEFAULT_SCOPE, component);
  }

  addEntityTypeRule(port: string, entitySelector: string, component: Type<any>) {
    let rule = new EntityTypeRule(port, entitySelector, component);
    this.entityTypeRuleService.addRule(rule);
  }

  getEntityTypeWidget(entityType: EntityType, port: string): Type<any> {
    return this.entityTypeRuleService.getWidget(entityType, port);
  }

  addDefaultPropertyTypeRule(port: string, component: Type<any>) {
    this.addPropertyTypeRule(port, DEFAULT_SCOPE, DEFAULT_SCOPE, null, component);
  }

  addPropertyTypeRule(port: string, entitySelector: string, propertySelector: string,
      propertyTypeTypeSelector: string, component: Type<any>) {
    let rule = new PropertyTypeRule(port, entitySelector, propertySelector, propertyTypeTypeSelector, component);
    this.propertyTypeRuleService.addRule(rule);
  }

  getPropertyTypeWidget(propertyType: PropertyType, port: string): Type<any> {
    return this.propertyTypeRuleService.getWidget(propertyType, port);
  }
}
