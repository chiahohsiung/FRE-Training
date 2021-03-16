import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITunesAPIService } from '../services/itunes-api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  resultHint: string = "Search Albums by ArtistName:";
  queryName: any;
  resultsAll: any;
  resultsCur: any[] = [];
  selectNum: number[] = [10, 50, 200, 500];
  selectValue = 10;

  constructor(
    private route: ActivatedRoute,
    private itunesService: ITunesAPIService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryName = params.queryName;
      this.getResults();
    });
  }

  ngOnChange(): void {
    this.hint(this.selectValue);
  }

  getResults() {
    if(this.queryName) {
      this.itunesService.searchData(this.queryName).subscribe(res => {
        this.resultsAll = res;
        this.hint(this.selectValue);
      });
    }
  }

  hint(num: number) {
    this.resultHint = `Total ${this.resultsAll.resultCount} results found for "${this.queryName}" | Select Page Size: `;
    if(!num || num > this.resultsAll.resultCount) {
      this.resultsCur = this.resultsAll.results;
    }
    else {
      this.resultsCur = this.resultsAll.results.slice(0,num);
    }
  }

}