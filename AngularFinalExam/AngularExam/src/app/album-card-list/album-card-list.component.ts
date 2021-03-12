import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-album-card-list',
  templateUrl: './album-card-list.component.html',
  styleUrls: ['./album-card-list.component.scss']
})


export class AlbumCardListComponent implements OnInit, OnDestroy {
  count: number;
  albums: any[] = [];
  artistName: string;
  isSearching = false;
  isFreshing = false;
  size: number = 500;

  onPageSize() {
    this.http.getCustomSize.next(this.size);
  }

  constructor(private http: HttpService,
    private router: Router) {
    this.http.resultsGetted.subscribe(() => {
      // console.log(this.size);

      this.count = this.http.count;
      this.albums = this.http.outputs;
      this.artistName = this.http.artistName;
      this.isSearching = this.artistName.length === 0 ? false : true;
      this.router.navigate([this.artistName]);
      // console.log(this.albums[0]);
      localStorage.clear();
      if (this.artistName.length !== 0) {
        localStorage.setItem('artistName', this.artistName);
        localStorage.setItem('count', this.count.toString());
        localStorage.setItem('albums', JSON.stringify(this.albums));
        localStorage.setItem('limit', this.http.limit.toString());
      }
      this.router.navigate([this.artistName]);
    });

    this.http.refreshed.subscribe(() => {
      // localStorage.clear();
      this.count = this.http.count;
      this.albums = this.http.outputs;
      this.artistName = this.http.artistName;
      this.isSearching = this.artistName.length === 0 ? false : true;
      this.size = this.http.limit;
      this.router.navigate([this.artistName]);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
//
