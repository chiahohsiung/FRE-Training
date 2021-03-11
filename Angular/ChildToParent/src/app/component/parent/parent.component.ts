import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  message:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getChildData(data:string){
    this.message= data
  }
}
