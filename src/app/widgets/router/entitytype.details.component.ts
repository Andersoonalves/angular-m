import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../../animations';

import { EntityType } from '../../meta/entity.type';
import { EntityTypeComponent } from '../../meta/entitytype.component';
import { MetadataService } from '../../meta/metadata.service';

@Component({
  template: `
    <h2>Details</h2>
    <div *ngIf="entitytype">
      <h3>Path: /{{ entitytype.name }}</h3>
    </div>
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
    private service: MetadataService
  ) {
    super();
  }

  ngOnInit() {
    this.route.params
      .switchMap(
        (params: Params) =>
          this.service.findEntityType(params['entitytypename']))
      .subscribe(
        (entity: any) => {
          this.entitytype = entity;
          console.log(entity);
        });
  }

}
