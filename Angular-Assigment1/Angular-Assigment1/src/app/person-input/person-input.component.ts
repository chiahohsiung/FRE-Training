import { Component, OnInit } from '@angular/core';
import {PERSONS} from '../person_data';
import {PersonServiceService} from '../person-service.service';
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  persons = PERSONS;
  newItem:string[] = this.persons;
  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
  }

  onClick(event): void {
    if(event.value !== ""){
      this.personService.addPerson(event.value);
      this.persons.push(event.value);
      this.newItem = this.persons;
      event.value = "";
    }
    
  }

}
