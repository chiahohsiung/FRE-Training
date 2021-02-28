import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  person = "";
  personList = [];

  onInputPerson(event){
    this.person = event.target.value;
  }
  onClick() {
    console.log(this.person)
    this.personList.push(this.person)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
