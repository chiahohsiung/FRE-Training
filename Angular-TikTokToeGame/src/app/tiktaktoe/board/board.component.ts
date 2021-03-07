import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: string[];
  constructor() {
    this.board = new Array(9).fill(null);
    console.log(this.board)
   }

  ngOnInit(): void {
  }

}
