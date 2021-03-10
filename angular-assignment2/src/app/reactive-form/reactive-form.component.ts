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
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['',[Validators.required]]
    },
    {
      validator: this.passwordValidator("password", "confirmPassword")
    });
    
  }
  checkIfInteger(control:AbstractControl): ValidationErrors | null{
    if(Number.isInteger(+control.value))
      return null;
    else
      return {notInteger: {value:true}}
  }
  matchPassword(control: AbstractControl) :ValidationErrors | null {
    if(control.get('password').value ===  control.get('confirmPassword').value){
      return null;
    }
    else{
      return {matchPassword: {value: true}}
    }
  }
  passwordValidator(passwordControlName:string, confirmPasswordControlName:string){
    return (formGroup: FormGroup) =>{
      const passwordControl = formGroup.controls[passwordControlName];
      const confirmPasswordControl = formGroup.controls[confirmPasswordControlName];
      if(!passwordControl || !confirmPasswordControl)
        return null;
      if(confirmPasswordControl.errors && !confirmPasswordControl.errors.mustMatch)
        return null;
      if(passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({mustMatch:true});
      }
      else{
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  onSubmit():void{
    console.log(this.form.value);
    this.isSubmit = true;
    this.name = this.form.value.name;
    this.contact = this.form.value.contact;
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    this.confirmPassword = this.form.value.confirmPassword;
  }
}
