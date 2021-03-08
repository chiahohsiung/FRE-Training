import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirm } from '../../customValidators/confirm.validator';
import { user } from '../../interface/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public form!: FormGroup;
  users: user[]=[];

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), 
      Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cPassword: new FormControl('', [Validators.required]),
    },
    {validators: confirm}
    )
  }

  addUser(){
    this.users.push(this.form.value);
  }

}
