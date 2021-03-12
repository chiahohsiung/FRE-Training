import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../interface/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://itunes.apple.com/search?term="
  
  private endUrl = "&media=music&entity=album&attribute=artistTerm&limit=500";

  getAlbum(searchName:string): Observable<any> {
    return this.http.get<any>
    (`https://itunes.apple.com/search?term=${searchName}
    &media=music&entity=album&attribute=artistTerm&limit=500`)
    .pipe(
    map(response=> {
      console.log(response.results);
      return response.results;
    }));
  }
}
