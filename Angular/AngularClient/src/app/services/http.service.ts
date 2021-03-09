import { Injectable } from '@angular/core';
import {Comment} from '../models/comment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private comments:Comment[]=[];
  private url ="https://jsonplaceholder.typicode.com/comments"
  constructor(private httpClient:HttpClient) { }

  getCommentsApi():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.url);
  }
}
