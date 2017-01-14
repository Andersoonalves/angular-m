import { Component } from '@angular/core';

import { WidgetService } from './widgets/widget.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(widgetService: WidgetService) { }
}
