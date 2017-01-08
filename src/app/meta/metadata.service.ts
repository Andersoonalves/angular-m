import { Injectable, Type } from '@angular/core';

import { EntityType } from '../meta/entity.type';
import { Rule } from './rule';

@Injectable()
export class MetadataService {

  private rules: Rule [] = [];

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
