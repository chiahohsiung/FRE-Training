import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ItunesApiService } from '../services/itunes-api.service';
import { Result } from '../services/types';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  artist!: FormControl;
  results!: Result[];

  pageSize: string = 'one-hundred';
  pageSizeControl!: FormControl;
  options!: FormGroup;
  constructor(private api: ItunesApiService, fb: FormBuilder) {
    this.options = fb.group({
      pageSize: this.pageSizeControl,
    });
  }

  query() {
    let artist = this.artist.value;
    if (artist.length > 0) {
      localStorage.setItem('artist', artist);

      this.api.getAll(artist).subscribe((data) => {
        this.results = data.results.map((result: Result) => {
          let url = result.artworkUrl100;
          result.artwork =
            url.substring(0, url.length - 13) + '1000x1000bb.jpg';
          result.genre = result.primaryGenreName
            .replace(/[\W_]+/g, '-')
            .toLowerCase();
          return result;
        });
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.pageSize);
  }

  getArtist() {
    return localStorage.getItem('artist');
  }
  likeThis(element: Result) {
    element.like = !element.like;
    element.likeVal = element.like ? 'Favorite' : 'FavoriteBorder';
  }

  changeFn(event: any) {
    console.log(event);
    this.pageSize = event;
  }

  enter(event: any) {
    if (event.code === 'Enter') {
      this.query();
    }
  }
  getPageSize() {
    let pg = this.pageSize;
    let size = 0;
    switch (this.pageSize) {
      case 'five':
        size = 5;
        break;
      case 'ten':
        size = 10;
        break;
      case 'twenty':
        size = 20;
        break;
      case 'fifty':
        size = 50;
        break;
      case 'seventy-five':
        size = 75;
        break;
      case 'one-hundred':
        size = 100;
        break;
      default:
        break;
    }
    return size;
  }
  ngOnInit(): void {
    let artist = localStorage.getItem('artist');
    this.artist = new FormControl(artist ? artist : '', [Validators.required]);
    this.pageSizeControl = new FormControl('one-hundred');
    if (!!artist) {
      this.query();
    }
  }
}
