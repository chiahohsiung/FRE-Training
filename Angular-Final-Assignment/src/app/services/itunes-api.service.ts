import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ITunesAPIService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData(name: string, num?: number): Observable<any[]> {
    const url = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=500`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<any[]>(url, httpOptions);
  }
}
