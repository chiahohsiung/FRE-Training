import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get():string {
    return window.localStorage.getItem('keyword');
  }

  set(keyword: string):void {
    window.localStorage.setItem('keyword', keyword);
  }
}
