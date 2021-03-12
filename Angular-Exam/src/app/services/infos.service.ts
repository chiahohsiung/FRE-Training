import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  allAlbums = [

  ];
  constructor(private http: HttpClient) { }

  getQuotes(url) {
    return this.http.get(url);
  }
}
