import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})


export class ReactiveFormComponent implements OnInit {

  userList:User[] = [];
  forms!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z][0-9a-zA-Z_]+')]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      confirm_password: ['', [Validators.required]]
    })
  }

  addUser() {
    this.userList.push(this.forms.value);
  }

}
class User{
  name:string;
  contact:string;
  email:string;
  password:string;
  confirm_password:string;
}