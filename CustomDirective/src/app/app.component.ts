import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomDirective';

  timeNow!: Date;

  xyz:string = "sdgdfgdf";

  name:string = "rajeev kumar";
  num8:number = 8;

  constructor() {
    setInterval(()=>{ this.timeNow = new Date() }, 1000);
  }

  toggle = false;

  get format() {
    return this.toggle ? "shortDate":"fullDate";
  }

  changeFormat(){
    this.toggle = !this.toggle;
  }

  test_object: Object = {
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
}
