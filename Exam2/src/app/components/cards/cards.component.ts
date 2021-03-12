import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() filteredAlbums:any; 


  constructor() { }

  ngOnInit(): void {
  }

}
