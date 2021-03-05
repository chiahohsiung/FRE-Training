import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-react-form-array',
  templateUrl: './react-form-array.component.html',
  styleUrls: ['./react-form-array.component.scss']
})
export class ReactFormArrayComponent implements OnInit {

  nForm!:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.nForm = this.fb.group({
      name:['', Validators.compose([Validators.required, Validators.minLength(5)])],
      address:this.fb.group({
        city:['',Validators.compose([
          Validators.required, Validators.minLength(3)
        ])]
      }),
      nicknames:this.fb.array([])
    })
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.nForm.value);
  }

  newNickName():FormGroup{
    return this.fb.group({
      nickname:['', Validators.required],
      age:['', Validators.required]
    })
  }
  get nicknames():FormArray{
    return this.nForm.get('nicknames') as FormArray;
  }
  remove(index:number):void{
    this.nicknames.removeAt(index);
  }

  addNickname(){
    this.nicknames.push(this.newNickName())
  }


}
