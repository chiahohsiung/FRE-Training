import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  msgToChild:string;
  msgFromChild:string = '';

  constructor() { 
    this.msgToChild = "This is the message generated in parent and passed to child.";
  }

  ngOnInit(): void {
  }

  receiveMsg(data:string){
    console.log(data);
    this.msgFromChild = data;
  }

}
