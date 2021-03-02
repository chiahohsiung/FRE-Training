import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'DataBindins';
  message: string | undefined;
  city!: string;

  constructor() {
    this.message = "Hello World";
  }

  ngAfterViewInit() {
    document.getElementById("btnJS")?.addEventListener("click", () => {
      this.message = "Changed.. " + (new Date()).toLocaleTimeString();
    });
  }

  doUpdate(c: string) {
    this.message = "You are from : " + c;
  }

  doClick() {
    // alert("Clicked....");
    this.message = "Changed.. " + (new Date()).toLocaleTimeString();
  }

}
