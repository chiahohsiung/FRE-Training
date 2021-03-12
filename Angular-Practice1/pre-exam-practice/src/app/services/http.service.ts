import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private url = "https://itunes.apple.com/search?term=jack&media=music&entity=album&attribute=artistTerm&limit=500"
  
  constructor(private httpClient:HttpClient) { }

  getApi(name:string):Observable<any>{
    let url = "https://itunes.apple.com/search?term=" + name + "&media=music&entity=album&attribute=artistTerm&limit=500"
    this.httpClient.get<any>(url).subscribe(res=>console.log(res))
    return this.httpClient.get<any>(url)
  }


}
