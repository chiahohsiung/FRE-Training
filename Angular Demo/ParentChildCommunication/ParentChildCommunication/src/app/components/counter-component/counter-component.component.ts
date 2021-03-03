import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponentComponent implements OnInit {
  count: number;
  clickCount: number;
  flag: boolean;

  @Input() interval: number;
  @Output() onMax: EventEmitter<boolean>;

  constructor() {
    this.count = 0;
    this.interval = 1;
    this.clickCount = 0;
    this.flag = false;
    this.onMax = new EventEmitter<boolean>();
  }

  ngOnInit() {

  }

  private manageClickCount() {
    this.clickCount += 1;
    if (this.clickCount > 9) {
      this.flag = true;
      this.onMax.emit(this.flag);
    }
  }

  reset() {
    this.count = 0;
    this.clickCount = 0;
    this.flag = false;
    this.onMax.emit(this.flag);
  }

  inc() {
    this.manageClickCount();
    this.count = Number(this.count) + this.interval;
  }

  dec() {
    this.manageClickCount();
    this.count = Number(this.count) - this.interval;
  }

}
