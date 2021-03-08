import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  isSubmit:boolean = false;
  name:string = "";
  contact:string = "";
  email:string = "";
  password:string = "";
  confirmPassword:string = "";
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.minLength(2), Validators.required, Validators.max(40)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), this.checkIfInteger]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.formBuilder.group({
        password:['', [Validators.required, Validators.minLength(5)]],
        confirmPassword:['',[Validators.required]]},
        { validator : this.matchPassword}),
    });
  }
  checkIfInteger(control:AbstractControl): ValidationErrors | null{
    if(Number.isInteger(+control.value))
      return null;
    else
      return {"checkIfInteger": {value: control.value}}
  }
  matchPassword(control: AbstractControl) :ValidationErrors | null {
    if(control.get('password').value ===  control.get('confirmPassword').value){
      return null;
    }
    else{
      return {"matchPassword": {value: true}}
    }
  }
  onSubmit():void{
    console.log(this.form.value);
    this.isSubmit = true;
    this.name = this.form.value.name;
    this.contact = this.form.value.contact;
    this.email = this.form.value.email;
    this.password = this.form.value.passwords.password;
    this.confirmPassword = this.form.value.passwords.confirmPassword;
  }
}
