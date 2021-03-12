import { Component } from '@angular/core';
// import {AlbumService} from './album.service';
// import {Album} from './album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // artistName:string='';
  // album$ = new Array<Album>();

  // constructor(albumService:AlbumService){
  //     albumService.getAlbums().subscribe(resp =>{
  //       this.album$ = resp.map( album =>{
  //           return new Album(
  //               album.artistName,
  //               album.albumName,
  //               album.cover
  //           )
  //         }
  //       )
  //     })
  // }

  // getAlbums(artistName:string){
  //   console.log("in event", artistName)
  // }
}
