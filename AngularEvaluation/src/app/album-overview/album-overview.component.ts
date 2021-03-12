import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../shared/models/album';

@Component({
  selector: 'app-album-overview',
  templateUrl: './album-overview.component.html',
  styleUrls: ['./album-overview.component.scss']
})
export class AlbumOverviewComponent implements OnInit {
  @Input()
  album: Album | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
