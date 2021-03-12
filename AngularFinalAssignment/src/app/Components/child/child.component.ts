import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  albums = [];
  displayAlbums = [];
  inputArtist:string = "";
  sizes = [10,20,30,40,50,60,70,80,90,100,200];
  selectedSize:any = undefined;

  constructor(private dataServices: DataService) { }
  
  ngOnInit(): void {
    if(localStorage.getItem("artist")){
      this.inputArtist = localStorage.getItem("artist");
      this.getAlbums()
    }
  }

  valueChange(event){
    event.preventDefault();
    this.filterAlbums();
  }
  filterAlbums() {
    console.log("this isn the sel ", this.selectedSize)
    this.displayAlbums = this.albums.slice(0,this.selectedSize)
  }
  
  onClick(event) {
    event.preventDefault();
    localStorage.setItem("artist",this.inputArtist);
    this.getAlbums();
  }

  async getAlbums() {
    try {
      if(this.inputArtist){
        await this.dataServices.getCard(this.inputArtist).subscribe(r => {
          console.log("Success: ", r['results'])
          this.albums = r['results']
          this.displayAlbums = this.albums
        })
      }
    } catch (error) {
      console.log("Catch error: ", error);
    }
  }
}
