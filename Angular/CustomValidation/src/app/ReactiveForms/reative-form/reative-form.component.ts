import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { User } from '../../Interface/User';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.scss']
})
export class ReativeFormComponent implements OnInit {
  forms!: FormGroup;
  userList: User[] = [];
  constructor(private fb: FormBuilder) { }

  addUser() {
    this.userList.push(this.forms.value);
  }

  ngOnInit(): void {
    this.forms = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordConfirming,
    });
  }


  passwordConfirming(form: FormGroup) {
    let control = form.controls["password"];
    let matchingControl = form.controls["confirmPassword"]
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }

}
