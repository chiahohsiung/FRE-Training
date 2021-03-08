import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/CustomValidator/custom-validator';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  forms!: FormGroup;
  userList: User[] = [];
  addUser() {
    this.userList.push(this.forms.value);
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      //name is required 
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      contact: ['', [
        //required
        Validators.required,
        //only accepts 0-9
        Validators.pattern('[0-9]*'),
        //10 chars for min & max
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      //required & matches email syntax
      email: ['', [Validators.required, Validators.email]],
      //required & min 4 chars
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    }, {
      //creating validator called ConfirmPasswordValidator & passing in password & confirmPassword
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    });
  }

}