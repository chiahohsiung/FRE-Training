import { Component, OnChanges, Input, ɵɵsetComponentScope } from '@angular/core';
import { Result } from '../Result';
import {Album} from '../Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnChanges {
  @Input('listResult') albumResult:Result;
  selectedOption:number;
  options = [
    {name:"5", value:5},
    {name:"10", value: 10},
    {name:"20", value: 20},
    {name:"50", value: 50},
    {name:"100", value: 100},
    {name:"200", value: 200},
  ]
  albumCount: number = localStorage.getItem("albumCount") ? +localStorage.getItem("albumCount") : 0;
  albums: Album[] = localStorage.getItem("albums") ? JSON.parse(localStorage.getItem("albums")) : [];
  constructor() { }
  ngOnChanges(): void {
    if(this.albumResult.isInital){
      return;
    }
    this.albumCount = +this.albumResult.resultCount;
    this.albums = this.selectedOption? this.albumResult.results.slice(0,this.selectedOption) : this.albumResult.results
    localStorage.setItem("albumCount", this.albumResult.resultCount);
    localStorage.setItem("albums", JSON.stringify(this.albums));
  }
  onSelect(){
    this.albums = this.selectedOption? this.albumResult.results.slice(0,this.selectedOption) : this.albumResult.results
  }

}
