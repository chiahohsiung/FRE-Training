import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  personList: String[] = ['Tom'];

  addName(event: Event): void {
    const newName = document.getElementById('name-input') as HTMLInputElement;
    this.personList.push(newName.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
