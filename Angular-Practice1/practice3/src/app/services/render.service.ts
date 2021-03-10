import { Injectable } from '@angular/core';
import {User} from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class RenderService {
  private users:User[]=[]
  constructor() { }

  getUsers():User[]{
    return this.users
  }

  addUser(name:string, contact:string, password:string, 
    confirmpassword:string, skill:any):void{
      let newUser = new User;
      newUser.name = name;
      newUser.contact = contact;
      newUser.password = password;
      newUser.confirmpassword = confirmpassword;
    
      newUser.skills.push(skill)
      this.users.push(newUser)
      console.log(this.users)
  }
}
