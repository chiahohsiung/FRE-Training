import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  @Output() myOutPut: EventEmitter<string> = new EventEmitter<string>();
  outPutMessage: string = 'I am child component';
  constructor() { }

  ngOnInit(): void {
  }

  sendValues() {
    this.myOutPut.emit(this.outPutMessage);
  }

}
