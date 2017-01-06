import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type';

@Component({
    selector: 'mg-router-link',
    template: '<a routerLink="/{{entitytype.name}}" routerLinkActive="active">{{entitytype.description}}</a> ',
})
export class EntityTypeRouterComponent {

    @Input()  public entitytype: EntityType;
};
