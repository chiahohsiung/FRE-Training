import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AlbumService } from 'src/app/album.service';
import {Album} from './album'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  input!:string;
  albums= new Array<Album>();

  constructor(private httpClient: HttpClient, private albumService:AlbumService){

  }

  ngOnInit(): void {
     if (localStorage.getItem("name") != null) {
      this.input = localStorage.getItem("name")!
      this.getAlbums()
    }
  }

  getAlbums(): void{
    this.albumService.getAlbums(this.input).subscribe( resp => {
      this.albums = resp.results.map( (album:any) => {
        console.log(album.artworkUrl100)
        return new Album(
          album.collectionName,
          album.artistName,
          album.artworkUrl100
        )
      })
      
    }) 
  }

}