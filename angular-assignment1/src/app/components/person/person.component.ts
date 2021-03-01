import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personList:String[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addPerson(f: NgForm){
    this.personList.push(f.value.person);
    console.log(f);
  }
}
