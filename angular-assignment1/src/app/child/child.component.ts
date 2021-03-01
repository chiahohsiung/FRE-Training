import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() PersonList!: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
