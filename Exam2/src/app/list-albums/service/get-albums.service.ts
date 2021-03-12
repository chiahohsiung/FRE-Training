import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumsService {
  
  constructor(private http: HttpClient) { }
  
  public getAlbums(ARTIST_NAME:string):Observable<any>{
    let apiUrl = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;
    return this.http.get<any>(apiUrl);
  }
}
