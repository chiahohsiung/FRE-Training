import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveformbuilder',
  templateUrl: './reactiveformbuilder.component.html',
  styleUrls: ['./reactiveformbuilder.component.css']
})
export class ReactiveformbuilderComponent implements OnInit {
rform:FormGroup;
states = [{id:1,name:"Delhi"},{id:2,name:"Karnataka"},{id:3,name:"Kerala"}]

  constructor(private fb:FormBuilder) { }

  

  ngOnInit(): void {
    this.rform = this.fb.group({
      firstname:["",Validators.compose([Validators.required,
        Validators.pattern('[a-z][a-z]+'),Validators.minLength(4),
        Validators.maxLength(30)])],
      lastname:["",Validators.compose([Validators.required,
          Validators.pattern('[a-z][a-z]+'),Validators.minLength(4),
          Validators.maxLength(30)])],
        address: this.fb.group({
          city:["",Validators.required],
          Zip:["",Validators.required],
          state:["",Validators.required],
        })
    })
  }

  logForm(){
    if(this.rform.valid){
      console.log(this.rform.value)
    }
  }

}
