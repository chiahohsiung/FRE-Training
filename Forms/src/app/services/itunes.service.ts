import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  artist = null;
  url: string = `https://itunes.apple.com/search?`;

  constructor(private http: HttpClient) {}

  getAll(artist: string) {
    const parameters = new URLSearchParams({
      term: artist,
      media: 'music',
      entity: 'album',
      attribute: 'artistTerm',
      limit: '500',
    });

    let params = parameters.toString();

    return this.http.get<any>(this.url + params); // Observable
  }
}
