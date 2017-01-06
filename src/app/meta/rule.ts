import { Type } from '@angular/core';

export class Rule {

    static readonly DEFAULT_ENTITY_SCOPE: string = '*';

    static defaultEntityDirective(port: string, component: Type<any>): Rule {
        return new Rule(port, Rule.DEFAULT_ENTITY_SCOPE, component);
    }

    constructor(public port: string, public entitySelector: string, public component: Type<any>) {};

    hasDefaultScope(): boolean {
        return Rule.DEFAULT_ENTITY_SCOPE === this.entitySelector;
    }
}
