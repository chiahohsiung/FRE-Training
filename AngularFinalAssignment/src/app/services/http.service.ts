import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private httpClient:HttpClient) { }

  getApi(name:string):Observable<any>{
    let url = "https://itunes.apple.com/search?term=" + name + "&media=music&entity=album&attribute=artistTerm&limit=500"
    return this.httpClient.get<any>(url)
  }


}
