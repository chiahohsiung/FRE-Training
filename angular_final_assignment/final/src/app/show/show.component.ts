import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { Album } from '../models/album.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  albums: Observable<Album[]>;

  constructor(private store: Store<AppState>) {
    this.albums = store.select('album');
  }

  ngOnInit(): void {
  }

}
