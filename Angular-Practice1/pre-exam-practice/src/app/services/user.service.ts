import { Injectable } from '@angular/core';
import {User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:User[]=[]
  constructor() { }

  addUser(name:string, contact:string, password:string, confirmpassword:string
    , skills:any):void{
      let newUser = new User();
      newUser.name = name;
      newUser.contact = contact;
      newUser.password = password;
      newUser.confirmpassword = confirmpassword;
      newUser.skills.push(skills)

      this.users.push(newUser);
    }

    getUsers():User[]{
      return this.users;
    }
}
