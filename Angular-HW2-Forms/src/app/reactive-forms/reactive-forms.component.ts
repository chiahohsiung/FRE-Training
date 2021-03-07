import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ControlContainer} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  addUserForm!: FormGroup;
  users: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
      phone: ["", Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]\d*$/)])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      pwd: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/)])],
      pwdConfirm: ["",[this.pwdMatchValidator()]],
    });

    console.log(this.addUserForm);
  }

  pwdMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if(!control.value) {
        return { pwdNotMatch: "This filed is required." }
      }
      const pwd = this.addUserForm.get('pwd')?.value;
      if(!pwd) {
        return { pwdNotMatch: "Please correct password style above." }
      }
      if(control.value !== pwd) {
        return { pwdNotMatch: "Confirm password does not match."}
      }
      return null;
    }
  }

  onSubmit() {
    if(this.addUserForm.valid) {
      this.users.push(this.addUserForm.value);
    }
  }
}
