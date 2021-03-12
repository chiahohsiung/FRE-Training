import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GetAlbumsService } from './service/get-albums.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit {
  info:string = "Search Albums by ArtistName: ";
  @Input() input:string;
  resultCount:number;
  albums:any[];
  fullAlbums:any;
  size:number[] = [5, 10, 50, 100, 200];
  selectSize!:number;

  constructor(private getAlbum : GetAlbumsService) { }

  ngOnInit(): void {
    if(localStorage.getItem("query")){
      this.input = localStorage.getItem("query");
      this.getAlbums();
    }
  }

  ngOnChange(): void{
    this.render(this.selectSize);
  }

  getAlbums(){
    this.getAlbum.getAlbums(this.input).subscribe(
      data => {
        this.resultCount = data.resultCount
        this.fullAlbums = data;
        this.render(this.selectSize);
      }
    );
  }

  onSubmit(){
    localStorage.setItem("query", this.input);
    this.getAlbums();
  }

  render(num: number){
    this.info = `Total ${this.resultCount} results found for "${this.input}" | Select Page Size: `;
    if(!num || num > this.resultCount){
      this.albums = this.fullAlbums.results;
    }else{
      this.albums = this.fullAlbums.results.slice(0, num);
    }
  }
}
