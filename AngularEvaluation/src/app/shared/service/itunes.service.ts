import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../models/result';

@Injectable()
export class ItunesService {

  constructor(private http: HttpClient) { }

  searchByArtistName(artistName: string): Observable<Result> {
    return this.http.get<Result>(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`);

  }
}
