import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { EntityTypeComponent } from '../meta/entitytype.component';
import { DomainService } from '../domain/domain.service';
import { FlashMessageService } from './flash.message.service';

@Component({
  selector: 'div [mgEntityListing]',
  templateUrl: './list.entities.component.html',
  animations: [slideInDownAnimation]
})
export class ListEntitiesComponent extends EntityTypeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  entities: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domain: DomainService,
    private flash: FlashMessageService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params
      .switchMap(
      (params: Params) =>
        this.domain.findEntityType(params['entitytypename']))
      .subscribe(
      (entity: any) => {
        this.entityType = entity;
        this.domain.getService(this.entityType.singular).listAll().then(
          entities => this.entities = entities
        );
      });
  }

  back() {
    this.flash.clearMessage();
    this.router.navigate(['/']);
    return false;
  }

  create() {
    this.flash.clearMessage();
    this.router.navigate([this.entityType.plural, 'new']);
    return false;
  }
}
