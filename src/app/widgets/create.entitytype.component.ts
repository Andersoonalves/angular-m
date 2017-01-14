import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { slideInDownAnimation } from '../animations';

import { EntityType } from '../meta/entity.type';
import { EntityTypeComponent } from '../meta/entitytype.component';
import { DomainService } from '../domain/domain.service';

@Component({
  templateUrl: './create.entitytype.component.html',
  animations: [ slideInDownAnimation ]
})
export class CreateEntityTypeComponent extends EntityTypeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  myForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domain: DomainService,
    private fb: FormBuilder
  ) {
    super();
  }

  configureForm(entityType: EntityType) {
    this.entitytype = entityType;
    let fbConf = {};

    entityType.properties.forEach( propertyType => {
      fbConf[propertyType.name] = ['']; // TO DO Add validators here according to metadata
    });

    this.myForm = this.fb.group(fbConf);  
  }

  ngOnInit() {
    this.route.params
      .switchMap(
        (params: Params) =>
          this.domain.findEntityType(params['entitytypename']))
      .subscribe(
        (entityType: any) => {
          this.configureForm(entityType);
        });
  }

  onSubmit(form: any): void { 
    this.domain.getService(this.entitytype.singular).create(form); 
    console.log('you submitted value:', form);  
  }
}
