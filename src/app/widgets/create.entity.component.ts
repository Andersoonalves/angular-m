import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FlashMessageService } from './flash.message.service';

import { slideInDownAnimation } from '../animations';

import { EntityType } from '../meta/entity.type';
import { EntityTypeComponent } from '../meta/entitytype.component';
import { DomainService } from '../domain/domain.service';

import { TitleCase } from '../pipes/titlecase.pipe';

@Component({
  templateUrl: './create.entity.component.html',
  animations: [ slideInDownAnimation ]
})
export class CreateEntityComponent extends EntityTypeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  myForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domain: DomainService,
    private fb: FormBuilder,
    private flash: FlashMessageService
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

  mapEntityTypeParam(params: Params): Promise<EntityType> {
    return this.domain.findEntityType(params['entitytypename']);
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.mapEntityTypeParam(params))
      .subscribe((entityType: EntityType) => this.configureForm(entityType));
  }

  onSubmit(form: any): void {
    this.domain.getService(this.entitytype.singular).create(form);
    let entityTypeName = TitleCase.toTitleCase(this.entitytype.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully created.`);
    this.router.navigate([this.entitytype.plural, form[this.entitytype.tags.id] ]);
  }
}
