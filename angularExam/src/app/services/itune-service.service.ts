import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItuneServiceService {

  baseUrl:string = "https://itunes.apple.com/search?";
  constructor(private http: HttpClient) { }

  getSongsByArtist(artist: string){
    let urlApi = `${this.baseUrl}term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`
    return this.http.get<any>(urlApi)
  }
  
}
