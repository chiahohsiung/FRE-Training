import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private httpClient: HttpClient) {}

  getAlbums(artist: string): Observable<Album[]> {
    const ob = this.httpClient.get<any>(
      'https://itunes.apple.com/search?term=${' +
        artist +
        '}&media=music&entity=album&attribute=artistTerm&limit=500'
    );
    return ob.pipe(
      map((data) => {
        const res: Album[] = data['results'].map((album: any) => ({
          artist: album['artistName'],
          collection: album['collectionName'],
          cover: album['artworkUrl100'],
        }));
        return res;
      })
    );
  }
}
