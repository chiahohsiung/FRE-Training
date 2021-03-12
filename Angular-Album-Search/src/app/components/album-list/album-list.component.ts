import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  artist:string='';
  anyAlbums: any;
  albums:any;

  constructor(private albumSerivce: AlbumService) { }

  ngOnInit(){}

  getAlbums() {
    this.albumSerivce.getAlbumsAPI(this.artist).subscribe(resp => {
      console.log("in album-list", resp)
    });
    
  }

  
}
