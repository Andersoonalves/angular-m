import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { FlashMessageService } from './flash.message.service';
import { EntityType, Entity } from '../meta/entity.type';
import { EntityComponent } from '../meta/entity.component';
import { DomainService } from '../domain/domain.service';

@Component({
  templateUrl: './entity.show.component.html',
  animations: [ slideInDownAnimation ]
})
export class EntityShowComponent extends EntityComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  message: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domain: DomainService,
    private flash: FlashMessageService
  ) {
    super();
  }

  mapEntityParam(params: Params): Promise<Entity> {
    return new Promise((resolve, reject) => {
      this.domain.findEntityType(params['entitytypename']).then(
        (entityType: EntityType) => {
          let entityPromisse = this.domain.getService(entityType.singular).findUnique(params['key']);
          resolve(entityPromisse);
        }
      );
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.mapEntityParam(params))
      .subscribe(
        (entity: any) => {
          this.entity = entity;
        });
  }

  back() {
    this.router.navigate([this.entity.entityType.plural]);
    this.flash.clearMessage();
    return false;
  }

}
