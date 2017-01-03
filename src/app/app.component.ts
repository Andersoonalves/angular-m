import { Component } from '@angular/core';

import { MetadataService } from './meta/metadata.service';

@Component({
  selector: 'm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor(private metadata: MetadataService) {
    this.describeDomainModel();
  }

  describeDomainModel() {
    this.metadata.describe('Client');
    this.metadata.describe('Product');
  }
}
