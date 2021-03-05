import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name-validator.directive';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  firstName = "Jason";

  lastName = "Wu";

  personInfo = this.fb.group({
    firstName:[this.firstName, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/Tom/i)
    ]],
    lastName:[this.lastName],
    alias:this.fb.array([
      this.fb.control('')
    ])
  });



  result:string;

  get alias(){
    return this.personInfo.get('alias') as FormArray;
  }

  get testName(){
    return this.personInfo.get('firstName');
  }

  constructor(private fb: FormBuilder){}
  onSubmit(){
    this.result = this.personInfo.status;
    console.log(this.firstName);
    console.log(this.lastName);

  }

  addAlias(){
    this.alias.push(this.fb.control(''))
  }
}
