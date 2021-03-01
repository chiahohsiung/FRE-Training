import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from '../person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons:string[];
  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }

}
