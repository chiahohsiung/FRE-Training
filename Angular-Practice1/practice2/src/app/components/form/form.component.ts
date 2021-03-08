import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {FormserviceService} from '../../formservice.service';
import{gte} from '../../Validators/custom.validators'
import {User} from '../../user';
import { from } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  nForm!:FormGroup;
  nameList:any[]=[];
  constructor(private fb:FormBuilder, private fService:FormserviceService) { }

  ngOnInit(): void {
    this.nForm = this.fb.group({
      name:['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      contact:['', Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      matchpassword:this.fb.group({
        password:['',Validators.required],
        confirmpassword:['',Validators.required]
      },{ validator: gte}),
      skills:this.fb.array([])
    })
  }

  get matchpassword(){
    return this.nForm.get('matchpassword')
  }

  getserviceService():FormserviceService{
    return this.fService;
  }

  getList():User[]{
    return this.getserviceService().getList();
  }

  newSkills():FormGroup{
    return this.fb.group({
      skill:['',Validators.required],
      exp:['', Validators.required]
    })
  }
  setUser():void{
    let user = new User();
    let nFormValue = this.nForm.value
    user.name = nFormValue.name;
    user.contact = nFormValue.contact;
    user.email = nFormValue.email;
    user.password = nFormValue.matchpassword.password;
    user.confirmpassword = nFormValue.matchpassword.confirmpassword;
    user.skills.push(nFormValue.skills);
    this.getserviceService().setUser(user);
    this.nameList = this.getList();
    this.nForm.reset();
    this.skills.clear();
  }

  get skills():FormArray{
    return this.nForm.get('skills') as FormArray
  }
  addSkill():void{
    this.skills.push(this.newSkills())
  }
}
