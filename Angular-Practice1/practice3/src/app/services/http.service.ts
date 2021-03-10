import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url ="https://jsonplaceholder.typicode.com/comments";
  constructor(private httpClient:HttpClient) { }

  getApi():Observable<any>{
    return this.httpClient.get<any>(this.url)
  }
}


