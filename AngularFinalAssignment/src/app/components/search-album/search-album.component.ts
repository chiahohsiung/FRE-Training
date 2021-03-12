import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss']
})
export class SearchAlbumComponent implements OnInit {
  private data!: any[];
  renderdata: any[] = [];
  searchresult: string = "Search Albums by ArtistName: ";
  searchname!: string;
  selectsize!: number;
  resultsize!:string;
  size: any[] = [
    { size: 5 },
    { size:10 },
    { size: 50 },
    { size: 100 },
    { size: 150 },
    { size: 200 },
  ]

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    // refresh page localstorage.name to call api
    if (localStorage.getItem("name") != null) {
      this.searchname = localStorage.getItem("name")!
      this.getApi()
    }
  }

  getApi(): void {
    this.httpService.getApi(this.searchname).subscribe(res => {
      this.data = res.results
      this.renderdata = this.data
      //change the search information and send the size of the results
      this.changeSearchResultTitle((this.renderdata.length).toString());
    });
    localStorage.setItem("name", this.searchname)
  }

  changeSearchResultTitle(size:string): void {
    if (this.searchname == "") {
      this.searchresult = "Search Albums by ArtistName: ";
      return
    }
    this.searchresult = "Totoal " + size + " results found for " + "\"" + this.searchname + "\"";
  }

  selectChange(event: any) {
    this.selectsize = event.target.value;
    this.renderdata = this.data.slice(0, this.selectsize)
  }
}
