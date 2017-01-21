import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularMService } from '../../angular.m.service';
import { FlashMessageService } from './flash.message.service';
import { slideInDownAnimation } from './animations';
import { EntityType } from '../../meta/entity.type';
import { EntityTypeComponent } from '../../meta/entitytype.component';
import { TitleCase } from '../../pipes/titlecase.pipe';

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
    private fb: FormBuilder,
    private flash: FlashMessageService,
    private angularm: AngularMService
  ) {
    super();
  }

  configureForm(entityType: EntityType) {
    this.entityType = entityType;
    let fbConf = {};

    entityType.properties.forEach( propertyType => {
      fbConf[propertyType.name] = ['']; // TO DO Add validators here according to metadata
    });

    this.myForm = this.fb.group(fbConf);
  }

  mapEntityTypeParam(params: Params): Promise<EntityType> {
    return this.angularm.findEntityType(params['entitytypename']);
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.mapEntityTypeParam(params))
      .subscribe((entityType: EntityType) => this.configureForm(entityType));
  }

  onSubmit(form: any): void {
    this.angularm.create(this.entityType.singular, form);
    let entityTypeName = TitleCase.toTitleCase(this.entityType.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully created.`);
    this.router.navigate([this.entityType.plural, form[this.entityType.tags.id] ]);
  }
}
