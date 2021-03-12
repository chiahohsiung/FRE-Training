import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Results} from "../interface/results";
@Injectable({
  providedIn: 'root'
})
export class SearchSongsService {
  result$!:Observable<Results>;
  constructor(private httpClient:HttpClient) { }

  search(searchWord:string):void{
    let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:4200/");
    const url:string = `https://itunes.apple.com/search?term=${searchWord}&media=music&entity=album&attribute=artistTerm&limit=500`;
    this.result$ = this.httpClient.get<Results>(url,{headers:headers});
  }

  getObservable():Observable<Results>{
    return this.result$;
  }
}
