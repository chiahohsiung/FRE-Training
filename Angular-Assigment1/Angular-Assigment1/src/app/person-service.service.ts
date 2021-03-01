import { Injectable } from '@angular/core';
import {PERSONS} from './person_data';
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  persons:string[];
  constructor() { }
  getPersons(){
    return PERSONS;
  }
  addPerson(person:string) {
    PERSONS.push(person);
  }
}
