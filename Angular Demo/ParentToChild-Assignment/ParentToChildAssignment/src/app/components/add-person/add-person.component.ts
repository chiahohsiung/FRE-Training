import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  pname: string;
  pList: Array<string>;
  constructor() {
    this.pname = "";
    this.pList = [];
  }

  ngOnInit(): void {
  }

  add() {
    this.pList.push(this.pname);
  }

}
