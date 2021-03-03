import { Component, ViewChild } from '@angular/core';
import { CounterComponentComponent } from './components/counter-component/counter-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ParentChildCommunication';
  message!: string;

  @ViewChild(CounterComponentComponent)
  cnt!: CounterComponentComponent;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.cnt.interval = 20;
  }

  p_reset(c: CounterComponentComponent) {
    c.reset();
  }

  maxedOut(flag: boolean) {
    if (flag)
      this.message = "Max Click Reached, click reset to continue...";
    else
      this.message = "";
  }
}
