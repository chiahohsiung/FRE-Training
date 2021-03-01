import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  person: string = "";
  personList: Array<string>;
  constructor() { 
    this.person = "";
    this.personList = [];
  }
  ngOnInit(): void {
  }
  addPerson(person:string): void {
    this.person = person;
    this.personList.push(person);
  }
}
