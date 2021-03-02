import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  message: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getChildData(data: string) {
    this.message = data;
  }
}
