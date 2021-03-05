import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonServiceService} from '../person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Input() newItem:string[];
  @Output() showItem =  new EventEmitter<String>();

  persons:string[];
  newPersons:string[];
  constructor(private personService: PersonServiceService) { }

  onClick(person){
    this.showItem.emit(person);
  }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
    this.newPersons = this.newItem;
  }

}
