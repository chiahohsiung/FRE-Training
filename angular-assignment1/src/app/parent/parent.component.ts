import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})


export class ParentComponent implements OnInit {
  nameToAdd = '';
  constructor() { }
  ngOnInit(): void {
  }
  
  onAddPerson(value: string): void{
    console.log(value);
    this.nameToAdd = value;
  }

}