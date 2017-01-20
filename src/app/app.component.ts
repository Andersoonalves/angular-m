import { Component } from '@angular/core';
import { AngularMService } from './angular.m.service';

import { describeDomain } from './entities';
import { defineRules } from './rules';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private angularm: AngularMService
  ) {
    describeDomain(this.angularm);
    defineRules(this.angularm);
  }

}
