import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  forms!:FormGroup;
  userList: User[] = [];
  constructor() { }

  namechange():void {
    this.forms.get('name').valueChanges.subscribe(data=>{console.log(data)})
  }
  addUser(){
    console.log("jjjjjjjj")
    this.userList.push(this.forms.value)
    console.log(this.userList)

  }
  ngOnInit(): void {
    this.forms = new FormGroup({
      name: new  FormControl('',[Validators.required,Validators.pattern('[a-z][a-z]+')]),
      contact: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    email: new  FormControl('',[Validators.required,Validators.email]),
    })
    // Tracking value change in the form
    this.forms.get('name').valueChanges.subscribe(data=>{console.log("Value change from ngOnInit:"+data)})
    // Tracking status change in the form
    this.forms.statusChanges.subscribe(data=>console.log("Status changes from ngOnInit:" + data))
  }
}
