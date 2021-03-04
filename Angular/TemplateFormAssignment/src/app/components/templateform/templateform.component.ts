import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../user';
import {Profile} from '../../profile';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {
  newPerson = new Profile();
  lists:User[]=[];
  database:Profile[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  // name = {first: 'Nancy', last: 'Drew'};

  onSubmit(f:NgForm):void{
    console.log(f.value)
    let lastName = f.value.lastname;
    let firstName = f.value.firstname;
    let city = f.value.address.cityname;
    let zipcode = f.value.address.zipcode;
    this.lists.push(new User(lastName, firstName, city, zipcode))
    f.reset();
  }

  onSubmit2(fv:NgForm):void{
    // console.log(fv.value)
    console.log(this.newPerson.email)
    let temp = new Profile();
    temp.name = fv.value.name;
    temp.age =fv.value.age;
    temp.email= fv.value.email;
    
    this.database.push(temp)
    // fv.reset()
    // fv.reset()
    // console.log(this.database)
  }
}
