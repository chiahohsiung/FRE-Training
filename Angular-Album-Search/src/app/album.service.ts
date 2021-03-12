import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) { }

  getAlbumsAPI(artist:string): Observable<any>{
    const url = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`;
    return this.http.get<any>(url);
  }
}