import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {User} from '../interface/user'
import {ConfirmPasswordValidator} from './confirm-password'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  forms!: FormGroup;
  userList: User[]=[];

  addUser(){
    this.userList.push(this.forms.value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forms= this.fb.group(
      {
        name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
        contact: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),
              Validators.minLength(10),
              Validators.maxLength(10)]),
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required]),
        confirm: new FormControl('',[Validators.required,]),
      },
      {
        validator : ConfirmPasswordValidator("password","confirm")
      }
    
    );


  }
  
}
