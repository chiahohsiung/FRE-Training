import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  //get profile
  getProfile(searchQuery): Observable<any> {
    let dataUrl = `https://itunes.apple.com/search?term=${searchQuery}&media=music&entity=album&attribute=artistTerm&limit=500`;
    //console.log(this.http.get<any>(dataUrl).pipe(catchError(this.handleErrors)));
    //return this.http.get<any>(dataUrl).pipe(catchError(this.handleErrors));
    return this.http.get<any>(dataUrl);

  }
}
