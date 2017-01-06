import { Component } from '@angular/core';

import { MetadataService } from './meta/metadata.service';
import { PlainTextComponent } from './widgets/simple/plain';
import { BoldTextComponent } from './widgets/simple/bold';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor(private metadata: MetadataService) {
    this.describeDomainModel();
    this.defineRules();
  }

  describeDomainModel() {
    this.metadata.describe('Client');
    this.metadata.describe('Factory');
    this.metadata.describe('Product');
  }

  defineRules() {
    this.metadata.addRule('entitieslist', 'Product', BoldTextComponent);
    this.metadata.addRule('entitieslist', '*', PlainTextComponent);
  }

}
