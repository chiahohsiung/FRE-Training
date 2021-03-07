import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: string[];
  gamewon:string;
  xNext:boolean;
  constructor() {
    
  }

  get player() {
  return this.xNext ? 'X' : 'O';
  }

  selectBox(index: number) {
  if (!this.board[index] && !this.gamewon) {
    this.board[index] = this.player;
    this.xNext = !this.xNext;
  }

  this.gamewon = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      if (
        this.board[lines[i][0]] &&
        this.board[lines[i][0]] === this.board[lines[i][1]] &&
        this.board[lines[i][0]] === this.board[lines[i][2]]
      ) {
        return this.board[lines[i][0]];
      }
    }
    return null;
  }

  ngOnInit(): void {
    this.freshGame();
  }

  freshGame() {
    this.board = Array(9).fill(null);
    this.gamewon = null;
    this.xNext = true;
  }

}
