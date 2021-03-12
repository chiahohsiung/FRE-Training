import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from './../app.state'
import { Album } from './../models/album.model'
import * as AlbumActions from './../actions/album.actions'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  query = ""

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  async onEnter(){
    this.store.dispatch(new AlbumActions.RemoveAlbum())
    const result = await this.http.get(
      `https://itunes.apple.com/search?term=${this.query}&media=music&entity=album&attribute=artistTerm&limit=500`,
      {}
      ).toPromise()
    console.log(result['results'])
    for (const e of result['results']){
      this.store.dispatch(new AlbumActions.AddAlbum({artworkUrl100:e['artworkUrl100'], artistName:e['artistName'], collectionName:e['collectionName']}))
    }

  }
}
