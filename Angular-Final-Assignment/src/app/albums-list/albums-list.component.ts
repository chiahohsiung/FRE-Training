import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITunesAPIService } from '../services/itunes-api.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  resultInfo: string = "Search Albums by ArtistName:";
  queryName!: string;
  fullResults!: any;
  showResults: any[] = [];
  selectNum: number[] = [10, 50, 100, 200, 500];
  selectValue!: number;

  constructor(
    private route: ActivatedRoute,
    private itunesService: ITunesAPIService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryName = params.queryName;
      this.fetchResults();
    });
  }

  ngOnChange(): void {
    this.render(this.selectValue);
  }

  fetchResults() {
    if(this.queryName) {
      this.itunesService.fetchData(this.queryName).subscribe(response => {
        this.fullResults = response;
        this.render(this.selectValue);
      });
    }
  }

  render(num: number) {
    this.resultInfo = `Total ${this.fullResults.resultCount} results found for "${this.queryName}" | Select Page Size: `;
    if(!num || num > this.fullResults.resultCount) {
      this.showResults = this.fullResults.results;
    }
    else {
      this.showResults = this.fullResults.results.slice(0,num);
    }
  }

}
