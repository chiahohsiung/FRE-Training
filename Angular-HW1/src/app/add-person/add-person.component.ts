import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  newPerson: string = '';
  personList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addPersonKeyUp(event: any) {
    this.newPerson = event.target.value;
    if(this.newPerson) {
      this.personList.push(this.newPerson);
    }
    event.target.value = '';
  }
  addPerson(newPerson: any) {
    this.newPerson = newPerson.value;
    if(this.newPerson) {
      this.personList.push(this.newPerson);
    }
    newPerson.value = '';
  }
}
