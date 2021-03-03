import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes';

  forClock!: Date;

  constructor() {
    setInterval(() => {
      this.forClock = new Date();
    }, 1000);
  }

  toggle = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  name = 'Rajeev Kumar';

  object: Object = {
    foo: 'bar',
    fn: function () {
      console.log(this);
    },
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3, 4, 5]
    }
  };

  now = new Date();
}
