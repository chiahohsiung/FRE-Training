import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  personInfo = this.fb.group({
    firstName:['', Validators.required],
    lastName:[''],
    alias:this.fb.array([
      this.fb.control('')
    ])
  });

  result:string;

  get alias(){
    return this.personInfo.get('alias') as FormArray;
  }

  constructor(private fb: FormBuilder){}
  onSubmit(){
    this.result = this.personInfo.status;
  }

  addAlias(){
    this.alias.push(this.fb.control(''))
  }
}
