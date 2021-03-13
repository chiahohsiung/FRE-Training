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
  limit: number;
  options: number[];

  constructor(private store: Store<AppState>) {
    this.albums = store.select('album');
    this.limit = 500;
    this.options = [10, 25, 50, 100, 200, 300, 400, 500];
  }

  ngOnInit(): void {
  }

}
