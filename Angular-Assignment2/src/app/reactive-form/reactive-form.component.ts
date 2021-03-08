import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../password-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  myForm = this.fb.group({
    name:['', Validators.required],
    number:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
  }, {validators: passwordValidator})

  resultForm: Map <String, String> = new Map();

  get confirmPassword(){
    return this.myForm.get("confirmPassword");
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    Object.keys(this.myForm.controls).forEach( key => {
      let value = this.myForm.get(key).value;
      this.resultForm.set(key, value);
    })
    console.log(this.resultForm);
  }
 
  onSubmit(){
    console.log(this.resultForm)
    Object.keys(this.myForm.controls).forEach( key => {
      let value = this.myForm.get(key).value;
      this.resultForm.set(key, value);
    })
  }

}
