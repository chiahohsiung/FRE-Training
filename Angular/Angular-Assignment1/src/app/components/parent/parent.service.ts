import { Injectable } from '@angular/core';
import { Contact } from './contact.model'

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private contactLists: Contact[] = [];

  setContact(name:string):void{
    this.contactLists.push(new Contact(name))
  }

  getContactLists():Contact[]{
    return this.contactLists;
  }
}
