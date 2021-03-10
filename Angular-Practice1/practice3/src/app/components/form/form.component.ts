import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import { User } from '../../models/user'
import {RenderService} from '../../services/render.service';
import {gte} from '../../validators/customValidator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  nForm!:FormGroup;

  constructor(private fb:FormBuilder, private renderService:RenderService) { }

  ngOnInit(): void {
    this.nForm = this.fb.group({
      name:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      contact:['',Validators.compose([Validators.required, Validators.pattern('[0-9]*'), 
      Validators.minLength(3), Validators.maxLength(3)])],
      matchpassword:this.fb.group({
        password:['', Validators.required],
        confirmpassword:['', Validators.required]
      }, {validator:gte}),
      skills:this.fb.array([])
    })
  }

  newSkill():FormGroup{
    return this.fb.group({
      skill:['', Validators.required],
      exp:['', Validators.required]
    })
  }

  get skills(){
    return this.nForm.get('skills') as FormArray;
  }

  get matchpassword(){
    return this.nForm.get('matchpassword')!
  }

  addSkill(){
    // (this.nForm.get('skills') as FormArray).push(this.newSkill())
    this.skills.push(this.newSkill())
  }

  getUsers():User[]{
    return this.renderService.getUsers();
  }

  onSubmit():void{
    console.log(this.nForm.value)
    let uname = this.nForm.value.name;
    let contact = this.nForm.value.contact;
    let password = this.nForm.value.matchpassword.password;
    let confirmpassword = this.nForm.value.matchpassword.confirmpassword;
    let skill = this.nForm.value.skills;
    this.renderService.addUser(uname, contact, password, confirmpassword, skill)
  }
}
