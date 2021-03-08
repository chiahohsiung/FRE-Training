import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  private list:User[]=[]
  constructor() { }

  setUser(newUser:User):void{
    this.list.push(newUser);
  }

  getList():User[]{
    return this.list;
  }


}
