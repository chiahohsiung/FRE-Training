import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() msgFromParent:string = "";
  msgToParent = "This is the message generated from child and passed to parent.";
  @Output() myOutput: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  sendMsg(){
    this.myOutput.emit(this.msgToParent);
  }

}
