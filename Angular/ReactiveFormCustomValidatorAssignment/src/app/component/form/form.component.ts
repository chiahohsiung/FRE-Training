import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '../../user';
import {gte} from '../../custom/customvalidator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = " Welcome to Reactive Forms!"
  nForm!: FormGroup;
  Users:User[]=[];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nForm = this.fb.group({
      name:['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]+')])],
      contact:['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      matchpassword:this.fb.group({
        password:['', Validators.required],
        confirmPassword:['',Validators.required]
      },{validator:gte})
    })
  }

  get matchpassword(){
    return this.nForm.get('matchpassword')!
  }

  

  onSubmit():void{
    let temp = new User();
    temp.name = this.nForm.value.name;
    temp.contact = this.nForm.value.contact;
    temp.email = this.nForm.value.email;
    temp.password = this.matchpassword.value.password;
    temp.confirmPassword = this.matchpassword.value.confirmPassword;
    this.Users.push(temp);
  }

}
