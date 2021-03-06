import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {matchpasswordValidator} from './customvalidators/matchpassword.validator'
@Component({
  selector: 'app-customvalidationform',
  templateUrl: './customvalidationform.component.html',
  styleUrls: ['./customvalidationform.component.css']
})
export class CustomvalidationformComponent implements OnInit {
  userDetails:FormGroup;
  submitSuccess:Boolean = false;
  user:any;

  errors = {
    'name': [
      { type: 'required', message: 'Name is required.' },
    ],

    'contact': [
      { type: 'required', message: 'Contact is required.' },
      { type: 'pattern', message: 'Contact should be numbers only.'},
      { type: 'minlength', message: 'Contact length should be 10.' },
      { type: 'maxlength', message: 'Contact length should be 10.' }
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'Confirm password is required.' },
      { type: 'minlength', message: 'Confirm password length.' },
      { type: 'maxlength', message: 'Confirm password length.' },
      { type: 'mustMatch', message: 'Confirm password must be same '}
    ],
  }


  constructor(private fb: FormBuilder) { 
    this.userDetails = this.fb.group(
      {
      name: ['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]+'),Validators.minLength(4),Validators.maxLength(30)])],
      contact: ['',Validators.compose([Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)])],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30) ])],
      confirmpassword: ['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30)])],
    },
    {
      validator: matchpasswordValidator("password","confirmpassword")
    })
  }

  addUser(){
    console.log(" name : "+ this.userDetails.get("name").valid)
    console.log(" contact : "+ this.userDetails.get("contact").valid)
    console.log(" email : "+ this.userDetails.get("email").valid)
    console.log(" password : "+ this.userDetails.get("password").valid)
    console.log(" confirmpassword : "+ this.userDetails.get("confirmpassword").valid)
    console.log(" match : "+ this.userDetails.get("confirmpassword").hasError('mustMatch'))


    console.log("Form Values" + JSON.stringify(this.userDetails.value));
    if(this.userDetails.valid){
      this.user = this.userDetails.value;
      this.submitSuccess = true
    }else {
      return;
    }
  }
  get funct() {
    return this.userDetails.controls;
  }

  ngOnInit(): void {
    
  }

}
