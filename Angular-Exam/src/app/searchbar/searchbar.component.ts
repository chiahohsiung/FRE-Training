import { Component, OnInit } from '@angular/core';
import { InfosService } from '../services/infos.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  text = null;
  quotes: object;
  count = null;
  allAlbum = [];
  artWork = null;
  numShows = localStorage.num || 10;
  items = [5, 10, 50, 100, 500];

  constructor(private info: InfosService) { }

  ngOnInit(): void {
    // console.log(typeof (this.quotes));
    let init = localStorage.getItem('lastInput') || '';
    if (init != '') {
      const leftUrl = 'https://itunes.apple.com/search?term=$';
      const rightUrl = '&media=music&entity=album&attribute=artistTerm&limit=500';
      const Url = [leftUrl, init, rightUrl].join('');
      this.info.getQuotes(Url).subscribe(info => {
        this.quotes = info;
        this.count = this.quotes["resultCount"];
        this.allAlbum = this.quotes["results"];
        this.artWork = this.quotes["artworkUrl100"];
        this.text = init;
      })
    };

  }

  ITunesAPI(text) {
    const leftUrl = 'https://itunes.apple.com/search?term=$';
    const rightUrl = '&media=music&entity=album&attribute=artistTerm&limit=500';
    const Url = [leftUrl, text, rightUrl].join('');
    localStorage.setItem('lastInput', text);
    localStorage.num = this.numShows;
    this.info.getQuotes(Url).subscribe(info => {
      this.quotes = info;
      this.count = this.quotes["resultCount"];
      this.allAlbum = this.quotes["results"];
      this.artWork = this.quotes["artworkUrl100"];
      this.text = text;
    })
  }



}
