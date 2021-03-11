import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ParentService } from './parent.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  contacts:Contact[] = []
  contactForm = new FormGroup({
    name: new FormControl("")
  });
  
  constructor(private parentService: ParentService) { }

  ngOnInit(): void {

  }

  setContact():void{
    if(this.contactForm.value.name)
    {
      this.parentService.setContact(this.contactForm.value.name);
      this.contactForm.reset();
    }
    this.getContactLists();
  }

  getContactLists(){
    this.contacts= this.parentService.getContactLists();
  }

  getRemoveIndex(index:number):void{
    this.parentService.getRemoveIndex(index)
  }

}
