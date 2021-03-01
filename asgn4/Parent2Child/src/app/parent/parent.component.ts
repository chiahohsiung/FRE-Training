import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  names: Array<string> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addName(name): void {
    if (name) {
      this.names.push(name);
    }
  }

}
