import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
@Output() searchTerm:EventEmitter<string>= new EventEmitter();
inputTerm:string | undefined;


  constructor() { 
    this.inputTerm = "";
  }

  ngOnInit(): void {

  }

  sendQuery(e) {
    this.inputTerm = e.target.value;
    if (e.key === 'Enter') {
      // console.log("here", this.inputTerm)
      this.searchTerm.emit(this.inputTerm);
    }

    
  }

}
