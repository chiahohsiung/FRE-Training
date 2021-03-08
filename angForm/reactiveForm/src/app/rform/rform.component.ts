import { Component, OnInit } from '@angular/core';
import {User} from '../interface/user';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {confirmingPassword} from './helper';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent implements OnInit {
  userList:User[] = [];
  forms!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: confirmingPassword})
  }

  addUser(){
    this.userList.push(this.forms.value);
  }

  

}
