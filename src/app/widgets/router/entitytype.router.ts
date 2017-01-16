import { Component } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';

@Component({
    selector: 'mg-router-link',
    template: '<a routerLink="/{{entitytype.plural}}" routerLinkActive="active">{{entitytype.description}}</a> ',
})
export class EntityTypeRouterComponent extends EntityTypeComponent { };
