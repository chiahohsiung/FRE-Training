import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResults } from '../models/search-results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  searchPodcast(term: string): Observable<SearchResults> {
    return this.http.jsonp<SearchResults> 
    ('https://itunes.apple.com/search?term=' + term + '&media=music&entity=album&attribute=artistTerm&limit=500', 'callback');
  }
}
