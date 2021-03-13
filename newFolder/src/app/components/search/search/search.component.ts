import { SearchResults } from './../../../models/search-results';
import { SearchService } from './../../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term!: string;
  results!: SearchResults;
  constructor(private search: SearchService) { }
  ngOnInit() {
  }
  submitSearch() {
    console.log('searching');
    this.search.searchPodcast(this.term).subscribe( res => {
      this.results = res;
      console.log(this.results);
    });
   }
}
