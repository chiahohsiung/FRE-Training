import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public personList: any[] = [];
  public inputValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  doAdd(e: any) {
    this.personList.push(this.inputValue);
    console.log(this.personList)
  }

}
