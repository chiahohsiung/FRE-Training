import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'album-library';
  searchService;
  results;
  
  constructor() {
    this.results = [];
    this.searchService = new SearchService();
  }

  GetSearchTerm(term) {
    this.searchService.search(term).then(albums => {
      console.log(albums);
      this.results = albums;
    });
  }



}
