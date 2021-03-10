import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  check(uname:string, pwd:string){
    if (uname==="test" && pwd==="123"){
      localStorage.setItem("username", "admin");
      return true;
    }
    else{
      return false;
    }
  }
}
