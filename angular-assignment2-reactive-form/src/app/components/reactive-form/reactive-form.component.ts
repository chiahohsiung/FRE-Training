import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})



export class ReactiveFormComponent implements OnInit {

  userList:User[] = [];
  forms!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl('', [Validators.required])
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