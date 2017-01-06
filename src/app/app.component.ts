import { Component } from '@angular/core';

import { MetadataService } from './meta/metadata.service';
import { EntityTypeRouterComponent } from './widgets/router/entitytype.router';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Example Application';


  constructor(private metadata: MetadataService) {
    this.describeDomainModel();
    this.defineRules();
  }

  describeDomainModel() {
    this.metadata.describe('Client', 'Clients');
    this.metadata.describe('Factory', 'Factories');
    this.metadata.describe('Product', 'Products');
  }

  defineRules() {
    this.metadata.addRule('entitytypes_menu', '*', EntityTypeRouterComponent);
  }

}
