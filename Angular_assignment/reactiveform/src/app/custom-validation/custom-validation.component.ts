import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,MinLengthValidator,Validators } from '@angular/forms';
import { identityRevealedValidator } from './identity-revealed.directive';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.scss']
})
export class CustomValidationComponent implements OnInit {
  Form!:FormGroup;
  submitted = false;


  constructor() { }

  ngOnInit() {



    this.Form = new FormGroup({
      'name': new FormControl('',[Validators.required]),
      'contact': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required,Validators.email]),
      'passwordpatch':new FormGroup({
        'password': new FormControl('',[Validators.required]),
        'confirmpassword': new FormControl('',[Validators.required])
      },{validators:identityRevealedValidator})

    });
  }

  get passwordpatch() {
    return this.Form.get('passwordpatch');
  }

  user = {
    name:'',
    contact:'',
    email:'',
    password:'',
    confirmpassword:'',

  }



  onSubmit() {
    this.submitted =true;

    console.log(this.Form);
    // console.log(this.Form.get('passwordpatch'));
    this.user.name = this.Form.value.name;
    this.user.contact = this.Form.value.contact;
    this.user.email = this.Form.value.email;
    this.user.password = this.Form.value.passwordpatch.password;
    this.user.confirmpassword = this.Form.value.passwordpatch.confirmpassword;
  }

}
