import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
@Input() albums: any;

  constructor() { }

  ngOnInit(): void {
  }

}
