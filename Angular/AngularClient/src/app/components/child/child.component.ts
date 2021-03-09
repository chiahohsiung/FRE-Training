import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {Comment} from '../../models/comment'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() comments:Comment[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChange){
    // if(changes){
    //   console.log(changes)
    // }
  }

}
