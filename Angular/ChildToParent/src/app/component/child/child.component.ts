import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() childMsg:EventEmitter<string> = new EventEmitter<string>();
  msg:string="This is from child";
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){
    this.childMsg.emit(this.msg)
  }

}
