import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  state={
    searchTerm: 'justin',
    itemPerPage:''
  }

  albumList:[]=[]

  updateSearch(input: any){
    this.state.searchTerm= input
    
  }
  
  updateItemPerPage(num:any){
    this.state.itemPerPage= num 
    console.log('success')
  }

  getAlbums(artistName:string): Observable<any>{
    return this.http.jsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`,'callback');
  }

}
