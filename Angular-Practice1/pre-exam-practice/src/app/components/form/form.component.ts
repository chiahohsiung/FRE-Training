import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service'
import {gte} from '../../validators/customValidator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private userService:UserService, private fb:FormBuilder) { }
  nForm!:FormGroup
  userList:User[]=[]

  ngOnInit(): void {
    this.nForm = this.fb.group({
      name:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      contact:['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')
    , Validators.maxLength(3), Validators.minLength(3)])],
      matchpassword:this.fb.group({
        password:['', Validators.required],
        confirmpassword:['', Validators.required]
      },{validator:[gte]}),
      skills:this.fb.array([])
    })
  }

  get matchpassword(){
    return this.nForm!.get('matchpassword');
  }

  get skills(){
    return this.nForm!.get('skills') as FormArray
  }

  newSkill():FormGroup{
    return this.fb.group({
      skill:['', Validators.required],
      exp:['', Validators.required]
    })
  }
  addUser():void{
    console.log(this.nForm.value)
    let name = this.nForm.value.name;
    let contact = this.nForm.value.contact;
    let password = this.nForm.value.matchpassword.password;
    let confirmpassword = this.nForm.value.matchpassword.confirmpassword;
    let skill = this.nForm.value.skills;

    this.userService.addUser(name, contact, password, confirmpassword, skill)
    this.nForm.reset();
    this.skills.clear();
  }

  addSkill(){
    this.skills.push(this.newSkill())
    this.userList = this.userService.getUsers();
  }

  removeSkill(index:number):void{
    this.skills.removeAt(index)
  }
}
