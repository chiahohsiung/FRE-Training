import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  count: number;
  outputs: any[] = [];
  artistName: string;
  limit: number = 500;
  private baseUrl = "https://itunes.apple.com/search?term=${"
  private endUrl = "}&media=music&entity=album&attribute=artistTerm&limit=";

  searchUpdated = new Subject<string>();
  resultsGetted = new Subject<string>();
  getCustomSize = new Subject<number>();
  refreshed = new Subject<string>();

  constructor(private http: HttpClient,
    private router: Router) {
    this.searchUpdated.subscribe((input) => {
      this.fetchAlbum(input);
    });

    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
          this.artistName = localStorage.getItem('artistName');
          this.count = +localStorage.getItem('count');
          let obj = localStorage.getItem('albums');
          this.outputs = JSON.parse(obj);
          this.limit = +localStorage.getItem('limit');
          this.refreshed.next();
        }
      });

    this.getCustomSize.subscribe(data => {
      this.limit = data;
    });
  }

  fetchAlbum(ArtistName: string) {
    this.artistName = ArtistName;
    console.log(ArtistName);
    this.http.get<any>
      // (`https://itunes.apple.com/search?term=${ArtistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
      (this.baseUrl + ArtistName + this.endUrl + this.limit)
      .pipe(map(
        response => {
          console.log(response.results);
          this.count = response.resultCount;
          this.outputs = response.results;
        }
      ))
      .subscribe(() => {
        this.resultsGetted.next();
      });
  }
}
