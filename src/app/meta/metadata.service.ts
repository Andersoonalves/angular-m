import { Injectable, Type } from '@angular/core';

import { EntityType } from './entity.type';
import { Rule } from './rule';
import { AbstractService } from './abstract.service';

@Injectable()
export class MetadataService {

  private entityTypes: { [name: string]: EntityType; } = {};
  private rules: Rule [] = [];
  private services: { [entitytype: string]: AbstractService<any>; } = {};

  findEntityType(name: string): Promise<EntityType> {
    let entityType = this.entityTypes[name];
    if (entityType) {
        return Promise.resolve(entityType);
    }
    throw `EntityType not found for name ${name}`;
  }

  listEntityTypes(): EntityType[] {
      return Object.keys(this.entityTypes).map( key => this.entityTypes[key]);
  }

  // Use Rule creation static methods
  addRule(port: string, entitySelector: string, component: Type<any>) {
    let rule: Rule = new Rule(port, entitySelector, component);
    this.rules.push(rule);
  }

  getWidget(entitytype: EntityType, port: string): Type<any> {
    return this.findEntityTypeTemplate(entitytype.name, port);
  }

  findEntityTypeTemplate(entityType: string, port: string): Type<any> {
    let defaultScope: Rule;
    let matchName: Rule;

    this.rules.forEach(rule => {
      if (rule.port === port) {
        if (rule.hasDefaultScope()) {
          defaultScope = rule;
        } else if (this.matchExpression(entityType, rule.entitySelector)) {
          matchName = rule;
        }
      }
    });

    return (matchName) ? matchName.component : defaultScope.component;
  }

  matchExpression(text, expression): boolean {
    return (expression)
      ? new RegExp('^' + expression.split('*').join('.*') + '$').test(text)
      : false;
  }

  addService(service: AbstractService<any>) {
    let entityType = service.describeEntityType();
    this.addEntityType(entityType);
    this.services[entityType.name] = service;
  }

  addEntityType(entityType: EntityType) {
    this.entityTypes[entityType.name] = entityType;
  }

  getService(entitytype: string): AbstractService<any> {
    return this.services[entitytype];
  }

}
