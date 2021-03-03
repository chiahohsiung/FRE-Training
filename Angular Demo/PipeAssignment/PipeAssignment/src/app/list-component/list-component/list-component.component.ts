import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  personList!: Array<string>;
  selectedPerson!: string;
  by!: string;

  constructor() { }

  ngOnInit() {
    this.personList = ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
  }

  doClick(e: Event, sPerson: string) {
    e.preventDefault();
    this.selectedPerson = sPerson;
  }

}
