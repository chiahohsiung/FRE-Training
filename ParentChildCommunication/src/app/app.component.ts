import { Component } from '@angular/core';
import {CounterComponent} from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pInterval:number = 10;
  flag:boolean = false;
  title = 'ParentChildCommunication';

  parent_reset(c:CounterComponent) {
    c.reset();
  }
}
