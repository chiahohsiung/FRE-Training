import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  msgToChildren: string[] = [];
  name = '';
  constructor() { }
  ngOnInit(): void {
  }
  onAddPerson(value: string): void{
    this.msgToChildren.push(value);
    this.name = '';
  }

}
