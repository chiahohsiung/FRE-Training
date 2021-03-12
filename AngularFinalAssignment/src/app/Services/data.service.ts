import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  artist = "";
  endpoint(artist) {
    return `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`;
  } 
  
  constructor(private http: HttpClient) { 
  }

  getCard(artist:string): Observable<[]> {

    return this.http.get<[]>(this.endpoint(artist));
  }

}
