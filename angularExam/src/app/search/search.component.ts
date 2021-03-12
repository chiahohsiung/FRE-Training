import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItuneServiceService } from '../services/itune-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput =  new FormControl('');
  result: any = [];
  artist! :string | null;
  displaySelected: string= "500";
  
  constructor(private ituneAPI: ItuneServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem('artist')){
      this.artist=localStorage.getItem('artist');
      this.searchInput.setValue(localStorage.getItem('artist'));
      this.result=JSON.parse(localStorage.getItem('data') || "[]");
      this.displaySelected=localStorage.getItem('displaySelected') || '500';
    }
  }

  search(){
    this.ituneAPI.getSongsByArtist(this.searchInput.value)
    .subscribe(data => {
      this.result = data.results;
      console.log(this.result);
      localStorage.setItem('data', JSON.stringify(this.result));
    });
    localStorage.setItem('artist', this.searchInput.value);
    this.artist = this.searchInput.value;
  }

  reDisplay(){
    localStorage.setItem('displaySelected', this.displaySelected)
  }

}
