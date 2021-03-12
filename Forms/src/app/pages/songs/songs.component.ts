import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  artist = 'linkin park';
  url: string = `https://itunes.apple.com/search?term=${this.artist}&media=music&entity=album&attribute=artistTerm&limit=500`;
  results!: Result[];
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data) => console.log(data));

    this.http.get<any>(this.url).subscribe((data) => {
      console.log(data['results']);
      this.results = data.results;
      console.log(this.results);
    });
  }

  // Using fetch
  // fetchData() {
  //   let request = fetch(this.url);
  //   request.then((response) =>
  //     response.json().then((data) => console.log(data))
  //   );
  // }
  getLikeVal(element: Result): string {
    console.log(element.likeVal);
    return element.likeVal;
  }
  likeThis(element: Result) {
    console.log(element);
    element.like = !element.like;
    element.likeVal = element.like ? 'Favorite' : 'FavoriteBorder';
  }
}

export class Result {
  public like: boolean = false;
  // likeVal: string = this.like ? 'Favorite' : 'FavoriteBorder';
  constructor(
    public likeVal = 'FavoriteBorder',
    public artistId: number,
    public artistName: string,
    public artistViewUrl: string,
    public artworkUrl60: string,
    public artworkUrl100: string,
    public collectionCensoredName: string,
    public collectionExplicitness: string,
    public collectionId: number,
    public collectionName: string,
    public collectionPrice: number,
    public collectionViewUrl: string,
    public contentAdvisoryRating: string,
    public copyright: string,
    public country: string,
    public currency: string,
    public primaryGenreName: string,
    public releaseDate: string,
    public trackCount: number,
    public wrapperType: string
  ) {}
}

export interface ResultType {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  copyright: string;
  country: string;
  currency: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number;
  wrapperType: string;
}
