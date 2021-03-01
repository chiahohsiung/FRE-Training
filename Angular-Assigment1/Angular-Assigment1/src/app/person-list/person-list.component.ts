import { Component, OnInit, Input } from '@angular/core';
import {PersonServiceService} from '../person-service.service';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Input() newItem:string[];
  persons:string[];
  newPersons:string[];
  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
    this.newPersons = this.newItem;
  }

}
