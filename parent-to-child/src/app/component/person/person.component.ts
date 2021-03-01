import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person:String = '';
  personList:String[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.person){
      this.personList.push(this.person);
      this.person = '';
    }
  }
}
