import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Profile} from'../../profile';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      zipcode: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), 
      Validators.minLength(5), Validators.maxLength(5)])
    })
   
  });

  profileList: Profile[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.profileForm.value)
    let temp = new Profile()
    temp.firstName = this.profileForm.value.firstName
    temp.lastName = this.profileForm.value.lastName
    temp.email = this.profileForm.value.email
    temp.city = this.profileForm.value.address.city
    temp.zipCode = this.profileForm.value.address.zipcode
    this.profileList.push(temp);
  }

}
