import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  nameList = ["Mark", "Andy", "Steve", "John", "Sindy", "Cherry", "Stanley"]
  filtername:string = "";
  filtername2:string = "A";
  select = "";
  constructor() { }

  ngOnInit(): void {
  }

  selectName(name:string):void{
    this.select = name;
  }

}
