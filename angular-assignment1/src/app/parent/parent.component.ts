import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})


export class ParentComponent implements OnInit {
  nameToAdd:string = '';
  pList: Array<string> = [];
  constructor() { }
  ngOnInit(): void {
  }
  
  onAddPerson(): void{
    this.pList.push(this.nameToAdd);
    this.nameToAdd = '';
  }

}