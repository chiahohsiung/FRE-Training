import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  person!: string;
  people: string[] = ['Ann', 'Debbie', 'Lucas'];
  constructor() {
    this.person=""; 
    this.people=[];

  }

  ngOnInit(): void {
  }

  addPerson(person:string){

    this.person = person;
    this.people.push(this.person);
  }


}
