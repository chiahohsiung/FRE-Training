import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name: string = '';
  List = [];
  addPerson() {
    this.List.push(this.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
