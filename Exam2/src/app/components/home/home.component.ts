import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artistName:string;

  artistProfile: any;

  num_album: number;

  num_page: number = 200;

  albums: any;

  filteredAlbums: any;

  fixArtistName:string;

  pageSelect: pageModel[] = [
    {
      _num: 5
    },
    {
      _num: 10
    },
    {
      _num: 50
    },
    {
      _num: 100
    },
    {
      _num: 200
    }
  ];

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
  }

  searchArtist(){
    
    this.fetchService.getProfile(this.artistName).subscribe(
      (data) => {this.artistProfile = data;}
    );

    this.num_album = this.artistProfile.resultCount;
    this.albums = this.artistProfile.results;
    this.filteredAlbums = this.albums.slice(0, this.num_page);
    this.fixArtistName = this.artistName;
    
  }

  onNumPageSelected(e:any) {
    this.num_page = e.target.value;
    this.filteredAlbums = this.albums.slice(0, this.num_page);
  }

}


class pageModel {
  _num: number;
}
