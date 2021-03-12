import { Component, OnInit } from '@angular/core';
import {AlbumService} from 'src/app/album.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {
  artist_input:string='';
  numOfResults:number = 0;
  response:any;

  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
  }

  getAlbums(){
    this.albumService.getAlbumsAPI(this.artist_input).subscribe( (resp) => {
      console.log("in search-artist",resp.results)
      // resp.results.map(item:any =>{
      //   console.log(item) -> wont work
      // })

        //resp -> // {resultCount : 200 , results: { [...all results array here] } }
        //resp.results will not access?
        //map over each album 

      // this.response = resp;
      // this.numOfResults = resp.resultCount;

      // console.log(Object.values(resp)[1][0])
      // Object.values(resp)[1].map(obj => {

      // })

    })
    // this.numOfResults = this.response.resultCount;
    // console.log(this.numOfResults)
  }

}


