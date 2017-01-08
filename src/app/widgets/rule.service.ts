import { Injectable, Type } from '@angular/core';

// TODO move to a GUI Module
import { EntityTypeRouterComponent } from '../widgets/router/entitytype.router';

@Injectable()
export class RuleService {

  private rules: Rule[] = [];

  // Use Rule creation static methods
  addRule(port: string, entitySelector: string, component: Type<any>) {
    let rule: Rule = new Rule(port, entitySelector, component);
    this.rules.push(rule);
  }

  getWidget(entitytypename: string, port: string): Type<any> {
    return this.findEntityTypeTemplate(entitytypename, port);
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

class Rule {

  static readonly DEFAULT_ENTITY_SCOPE: string = '*';

  static defaultEntityDirective(port: string, component: Type<any>): Rule {
    return new Rule(port, Rule.DEFAULT_ENTITY_SCOPE, component);
  }

  constructor(public port: string, public entitySelector: string, public component: Type<any>) { };

  hasDefaultScope(): boolean {
    return Rule.DEFAULT_ENTITY_SCOPE === this.entitySelector;
  }
}
