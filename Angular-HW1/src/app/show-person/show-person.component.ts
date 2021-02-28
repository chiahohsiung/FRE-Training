import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.scss']
})
export class ShowPersonComponent implements OnInit {

  @Input()
  personListInput!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
