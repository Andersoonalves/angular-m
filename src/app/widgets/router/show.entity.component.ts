import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularMService } from '../../angular.m.service';
import { slideInDownAnimation } from './animations';
import { FlashMessageService } from './flash.message.service';
import { EntityType, Entity } from '../../meta/entity.type';
import { EntityComponent } from '../../meta/entity.component';

@Component({
  selector: 'div [mgShowEntity]',
  templateUrl: './show.entity.component.html',
  animations: [slideInDownAnimation]
})
export class ShowEntityComponent extends EntityComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  message: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flash: FlashMessageService,
    private angularm: AngularMService
  ) {
    super();
  }

  mapEntityParam(params: Params): Promise<Entity> {
    return new Promise((resolve) => {
      this.angularm.findEntityType(params['entitytypename']).then(
        (entityType: EntityType) => {
          let entityPromisse = this.angularm.findUnique(entityType.singular, params['key']);
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

  edit() {
    this.flash.clearMessage();
    this.router.navigate([this.entity.entityType.plural, this.entity.key, 'edit']);
    return false;
  }

}
