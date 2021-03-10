import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:string="test";
  password:string="123";

  constructor() { }

  checkUser(name:string, password:string):boolean{
    if(name===this.user && password===this.password){
      localStorage.setItem('username', name)
      return true
    }
    return false
  }

}
