import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
  constructor(private fb: FormBuilder) { 
    
  }

  addUser(){
    console.log(" name : "+ this.userDetails.get("name").valid)
    console.log(" contact : "+ this.userDetails.get("contact").valid)
    console.log(" email : "+ this.userDetails.get("email").valid)
    console.log(" password : "+ this.userDetails.get("password").valid)
    console.log(" confirmpassword : "+ this.userDetails.get("confirmpassword").valid)

    console.log("Form Values" + JSON.stringify(this.userDetails.value));
    if(this.userDetails.valid){
      this.user = this.userDetails.value;
      this.submitSuccess = true
    }
  }
  get funct() {
    return this.userDetails.controls;
  }

  ngOnInit(): void {
    this.userDetails = this.fb.group(
      {
      name: ['',Validators.compose([Validators.required,])],
      contact: ['',Validators.compose([Validators.required])],
      email: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required])],
      confirmpassword: ['',Validators.compose([Validators.required])],
    },
    {
      validator: matchpasswordValidator("password","confirmpassword")
    })
  }

}
