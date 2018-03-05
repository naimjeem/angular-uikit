import { Component } from '@angular/core';
import * as UIkit from 'UIkit';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}
  notify() {
    UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Notification message', status: 'primary'})
  }
}
