import { forwardRef } from '@angular/core';
import { Component } from '@angular/core';

import { AngularMService } from './angular.m.service';

import { ThComponent } from './widgets/simple/th';
import { FormLineComponent } from './widgets/simple/form.line';
import { EditFormLineComponent } from './widgets/simple/edit.form.line';
import { ShowLineComponent } from './widgets/simple/show.line';
import { EntityLineComponent } from './widgets/simple/entity.line';
import { TdComponent } from './widgets/simple/td';

import { InMemoryDAO } from './domain/inmemory.dao';
import { EntityType } from './meta/entity.type';
import { ENTITY_TYPE_CONFIGURATION } from './entities';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private angularm: AngularMService
  ) {
    this.loadEntityTypeConfiguration();
    this.defineRules();
  }

  loadEntityTypeConfiguration() {
    ENTITY_TYPE_CONFIGURATION.forEach((jsonEntity: any) => {
      let entityType = new EntityType(jsonEntity.singular, jsonEntity.plural, jsonEntity.tags);
      jsonEntity.properties.forEach((jsonProperty: any) => {
        entityType.property(jsonProperty.name, jsonProperty.type);
      });
      this.angularm.addService(new InMemoryDAO(entityType));

    });
  }

  defineRules() {
    this.angularm.addDefaultPropertyTypeRule('table_head', ThComponent);
    this.angularm.addPropertyTypeRule('form_line', '*', 'matricula', null, FormLineComponent, { inputType: 'number' });
    this.angularm.addDefaultPropertyTypeRule('form_line', FormLineComponent, { inputType: 'text' });
    this.angularm.addDefaultPropertyRule('show_line', ShowLineComponent);
    this.angularm.addDefaultEntityRule('table_line', EntityLineComponent);
    this.angularm.addDefaultPropertyRule('table_cell', TdComponent);
    this.angularm.addPropertyRule('edit_form_line', '*', 'matricula', null, EditFormLineComponent, { inputType: 'number' });
    this.angularm.addDefaultPropertyRule('edit_form_line', EditFormLineComponent, { inputType: 'text' });
  }
}
