import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private url:string='https://jsonplaceholder.typicode.com/comments';
  private todolists:object=[{}];

  constructor(private HttpClient:HttpClient) { }

  

  getURL():string{
    return this.url;
  }

  setTodoLists(data:object):void{
    this.todolists = data;
  }

  getApi():Observable<object>{
    return this.HttpClient.get(this.getURL())
  }

  getTodoLists():object{
    return this.todolists;
  }


  
}
