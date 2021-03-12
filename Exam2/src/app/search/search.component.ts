import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Album } from '../interface/album';
import { SearchService } from '../service/search.service';
import { StorageServiceModule } from 'ngx-webstorage-service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  album: Array<Album> = [];
  searchName!: string;
  display: boolean = false;
  pageSize!:number;
  constructor(private search: SearchService, private router: Router) { }


  ngOnInit() {
  }

  searchResult() {
    this.getName();
    this.router.navigate([this.searchName]);
    this.search.getAlbum(this.searchName).subscribe(a => this.album = a);
    for (let i = 0; i < this.album.length; i++) {
      console.log(this.album[i]);
    }
  }
  getName() {
    return this.searchName;

  }

}
