import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customvalidationform',
  templateUrl: './customvalidationform.component.html',
  styleUrls: ['./customvalidationform.component.css']
})
export class CustomvalidationformComponent implements OnInit {
  userDetails:FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.userDetails = this.fb.group({
      name: ['',Validators.compose([Validators.required,
        Validators.pattern('[a-z][a-z]+'),Validators.minLength(4),
        Validators.maxLength(30)])],
      contact: ['',Validators.compose([Validators.required,
        Validators.pattern('[a-z][a-z]+'),Validators.minLength(4),
        Validators.maxLength(30)])],
      email: ['',],
      password: ['',],
      confirmpassword: ['',],
    })
  }

  addUser(){

  }
  ngOnInit(): void {
    
  }

}
