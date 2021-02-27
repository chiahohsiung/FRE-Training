import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../parent/contact.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() 
  contacts:Contact[] = [];
 
  
  constructor() { }

  ngOnInit(): void {
  }

  removeContact(index:number):void{
    this.contacts = this.contacts.filter(contact=>this.contacts.indexOf(contact) !== index)
  }




}
