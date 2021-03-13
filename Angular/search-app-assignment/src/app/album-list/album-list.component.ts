import { Component, OnInit, SimpleChange } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../interface/album'
import {HttpService} from '../service/http-service.service'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  //li: any;
  lis:Album[]=[];
  search= this.dservice.state.searchTerm;
  constructor(private dservice: HttpService) { }

  ngOnInit(): void {
    
  }
  

}
