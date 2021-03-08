import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  user = {
    name : "Jack",
    date : "03/18/2021",
    salary : 120000,
    description : "Hello I am Jack."
  }
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
