import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  person: string = '';
  personList: string[]= [];

  ngOnInit (): void {
  }

  addPerson(): void {
    if (this.person) {
      console.log(`Just added ${this.person}`);
      this.personList.push(this.person);
      this.person = '';
    }
  }
}
