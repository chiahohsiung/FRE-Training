import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() interval:number;
  @Output() onMax:EventEmitter<boolean>;
  clickCount:number;
  count:number;
  flag: boolean;

  constructor() {
    this.interval = 1;
    this.clickCount = 0;
    this.count = 0;
    this.flag = false;
    this.onMax = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
  }

  private manageClickCount() {
    this.clickCount ++;
    if (this.clickCount >= 5){
      this.flag = true;
      this.onMax.emit(this.flag);
    }
  }

  onInc(){
    this.manageClickCount();
    this.count += this.interval;
  }

  onDec(){
    this.manageClickCount();
    this.count -= this.interval;
  }

  reset() {
    this.count = 0;
    this.clickCount = 0;
    this.flag = false;
  }

}
