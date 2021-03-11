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
    console.log(this.contactLists)
    return this.contactLists;
  }

  getRemoveIndex(index:number):void{
    this.contactLists = this.contactLists.filter(contact=>this.contactLists.indexOf(contact) !== +index)
  }
}
