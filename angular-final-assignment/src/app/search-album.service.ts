import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchAlbumService {
  getAlbums(keyStr:string): Observable<any>{
    if(!keyStr.trim()){
      return of({resultsCoumt:0, results:[]});
    }
    const url = `https://itunes.apple.com/search?term=${keyStr}&media=music&entity=album&attribute=artistTerm&limit=500`;

    return this.http.get(url);
  }
  constructor(private http:HttpClient) { }
}
