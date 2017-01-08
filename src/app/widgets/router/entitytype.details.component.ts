import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../../animations';

import { EntityType } from '../../meta/entity.type';
import { EntityTypeComponent } from '../../meta/entitytype.component';
import { DomainService } from '../../domain/domain.service';

@Component({
  template: `
    <h1 *ngIf="entitytype">Listing {{ entitytype.description }}</h1>
    <button routerLink="/">Back</button>
  `,
  animations: [ slideInDownAnimation ]
})
export class EntityTypeDetailsComponent extends EntityTypeComponent implements OnInit {

  public entitytype: EntityType;

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domain: DomainService
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
          this.entitytype = entity;
          console.log(entity);
        });
  }

}
