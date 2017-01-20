import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularMService } from '../angular.m.service';
import { FlashMessageService } from './flash.message.service';
import { slideInDownAnimation } from '../animations';
import { Entity, EntityType } from '../meta/entity.type';
import { EntityComponent } from '../meta/entity.component';
import { TitleCase } from '../pipes/titlecase.pipe';

@Component({
  selector: 'div [mgEditEntity]',
  templateUrl: './edit.entity.component.html',
  animations: [slideInDownAnimation]
})
export class EditEntityComponent extends EntityComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
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

  configureForm(entity: Entity) {
    if (entity) {
      this.entity = entity;
      let fbConf = {};

      this.entity.entityType.properties.forEach(propertyType => {
        fbConf[propertyType.name] = entity.properties[propertyType.name]; // TO DO Add validators here according to metadata
      });

      this.myForm = this.fb.group(fbConf);
    }
  }

  mapEntityParam(params: Params): Promise<Entity> {
    return new Promise((resolve) => {
      this.angularm.findEntityType(params['entitytypename']).then(
        (entityType: EntityType) => {
          let entityPromisse = this.angularm.getService(entityType.singular).findUnique(params['key']);
          resolve(entityPromisse);
        }
      );
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.mapEntityParam(params))
      .subscribe((entity: Entity) => this.configureForm(entity));
  }

  onSubmit(form: any): void {
    console.log(form);
    this.angularm.getService(this.entity.entityType.singular).edit(this.entity.key, form);
    let entityTypeName = TitleCase.toTitleCase(this.entity.entityType.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully updated.`);
    this.router.navigate([this.entity.entityType.plural, form[this.entity.entityType.tags.id]]);
  }

  show() {
    this.flash.clearMessage();
    this.router.navigate([this.entity.entityType.plural, this.entity.key]);
    return false;
  }

  back() {
    this.flash.clearMessage();
    this.router.navigate([this.entity.entityType.plural]);
    return false;
  }

}
