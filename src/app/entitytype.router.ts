import { Component } from '@angular/core';

import { AngularMService } from './angular.m.service';
import { EntityTypeComponent } from './meta/entitytype.component';

@Component({
    selector: 'mg-router-link',
    template: '<a routerLink="/{{entityType.plural}}" routerLinkActive="active">{{entityType.description}}</a> ',
})
export class EntityTypeRouterComponent extends EntityTypeComponent {};
