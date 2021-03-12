import { Component, OnInit } from '@angular/core';
import {SearchSongsService} from "../../service/search-songs.service";
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';
import { Results } from 'src/app/interface/results';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  resultCount:number = 0;
  results!:any[];
  searchWord:string = "";
  pageAmountOptions:number[] = [5,10,50,100,200, 300];
  pageNumber!:number;
  constructor(private searchSongService: SearchSongsService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params.searchWord){
        this.searchWord = params.searchWord;
        this.searchSongService.search(params.searchWord);
        this.showResults().subscribe(data =>{
          this.resultCount = data.resultCount;
          this.results = data.results;
          console.log(this.results);
        })
      }
    })
  }

  showResults():Observable<Results>{
    return this.searchSongService.getObservable();
  }
}
