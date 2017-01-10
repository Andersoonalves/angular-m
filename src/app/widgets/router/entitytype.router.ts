import { Component, Input } from '@angular/core';

import { EntityType } from '../../meta/entity.type';
import { EntityTypeComponent } from '../../meta/entitytype.component';

@Component({
    selector: 'mg-router-link',
    template: '<a routerLink="/{{entitytype.name}}" routerLinkActive="active">{{entitytype.description}}</a> ',
})
export class EntityTypeRouterComponent extends EntityTypeComponent { };
