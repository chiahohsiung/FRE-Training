import { Component, OnInit } from '@angular/core';
import {ItunesService} from '../shared/service/itunes.service';
import {Album} from '../shared/models/album';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  albums: Album[] | undefined;
  resultCount = 0;
  artistName = '';
  showResult = false;
  pageSize = 5;
  currentPage = 1;

  pagePrevious(): void {
    this.currentPage --;
  }

  pageNext(): void {
    this.currentPage ++;
  }

  goSearch(): void {
    this.is.searchByArtistName(this.artistName).subscribe({
      next: result => {
        this.resultCount = result.resultCount;
        this.albums = result.results;
      },
      error: err => console.log(err)
    });
    this.showResult = true;
  }

  constructor(private is: ItunesService) { }

  ngOnInit(): void {
  }

}
