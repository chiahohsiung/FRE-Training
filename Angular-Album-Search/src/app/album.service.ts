import {Album} from './components/album-list/album';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumService{
  constructor(private httpClient:HttpClient) {}

   getAlbums(input:string):Observable<any>{
    let url = `https://itunes.apple.com/search?term=${input}&media=music&entity=album&attribute=artistTerm&limit=500`
    return this.httpClient.get<any>(url)
  }
}