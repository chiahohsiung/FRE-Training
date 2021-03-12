import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../user';
import { passwordMatch } from './password-match';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  userForms!: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder) {
    this.userForms = this.fb.group(
      {
        name: ['', Validators.required],
        contact: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        cfp: ['', Validators.required],
      },
      { validators: passwordMatch }
    );
  }

  get name(): FormControl {
    return this.userForms.get('name') as FormControl;
  }

  get contact(): FormControl {
    return this.userForms.get('contact') as FormControl;
  }

  get email(): FormControl {
    return this.userForms.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.userForms.get('password') as FormControl;
  }

  get cfp(): FormControl {
    return this.userForms.get('cfp') as FormControl;
  }

  onSubmit(): void {
    this.users.push(this.userForms.value);
    this.userForms.reset();
  }
}
