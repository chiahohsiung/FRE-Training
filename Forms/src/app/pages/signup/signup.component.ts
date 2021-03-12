import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = false;

  forms!: FormGroup;
  constructor() {}

  /**
   * Let's try to build a custom validator that, for passwords, checks if it passes certain rules
   */
  ngOnInit(): void {
    let passValidator = new PasswordValidator();
    this.forms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // Adding a custom validator to the password validator
      password: new FormControl('', [
        Validators.required,
        passValidator.validate,
      ]),
    });
    console.log(this.forms.get('password'));
  }

  getErrorMessage() {
    let errors = this.forms.get('password')?.errors;
    if (errors?.required) {
      return 'Password is required';
    } else if (errors?.invalid) {
      return this.forms.get('password')?.errors?.errMess;
    }
  }
}
