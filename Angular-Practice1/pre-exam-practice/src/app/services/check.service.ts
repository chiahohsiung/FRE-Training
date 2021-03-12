import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  private fusername:string= "test";
  private fpassword:string= "123";

  constructor() { }

  check(username:string, password:string):boolean{
    if (this.fusername === username && this.fpassword===password){
      localStorage.setItem('username', "test");
      return true;
    }
    return false;
  }
}
