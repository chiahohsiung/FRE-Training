import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() todoLists:any=[{}];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange):void{
    if(changes){
      this.todoLists = this.todoLists
    }
  }

}
