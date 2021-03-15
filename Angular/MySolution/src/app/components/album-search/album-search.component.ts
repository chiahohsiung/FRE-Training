import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss'],
})
export class AlbumSearchComponent implements OnInit {
  searchValue!: string;
  artist!: string;
  pageSize = 500;
  subscription: Subscription | undefined;
  albums!: Album[];
  constructor(private as: AlbumService) {}

  ngOnInit(): void {
    if ('albums' in localStorage) {
      this.albums = JSON.parse(localStorage.getItem('albums')!);
    } else {
      this.albums = [];
    }

    if ('searchValue' in localStorage) {
      this.searchValue = localStorage.getItem('searchValue')!;
    } else {
      this.searchValue = '';
    }
    this.artist = this.searchValue;
  }

  onEnter() {
    this.artist = this.searchValue;
    this.subscription = this.as.getAlbums(this.artist).subscribe(
      (albums) => {
        this.albums = albums;
        localStorage.setItem('albums', JSON.stringify(this.albums));
      },
      (err) => alert(err),
      () => this.subscription!.unsubscribe()
    );
    localStorage.setItem('searchValue', this.searchValue);
  }
}
