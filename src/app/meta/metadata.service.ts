import { Injectable, Type } from '@angular/core';

import { EntityType } from './entity.type';
import { Rule } from './rule';

@Injectable()
export class MetadataService {

  private entityTypes: EntityType [] = [];
  private rules: Rule [] = [];

  describe(name: string, description: string): EntityType {
    let entityType: EntityType = new EntityType(name, description);
    this.entityTypes.push(entityType);
    return entityType;
  }

  findEntityType(name: string): EntityType {
    this.entityTypes.forEach( entityType => {
      if (entityType.name === name) {
        return entityType;
      }
    });
    throw `EntityType not found for name ${name}`;
  }

  listEntityTypes(): EntityType[] {
      return this.entityTypes;
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

}
