import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  person: string = '';
  personList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  addPerson(person:string): void {
    this.person = person;
    this.personList.push(person);
    this.person = '';
  }

}