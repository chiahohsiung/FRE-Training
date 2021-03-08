import { Injectable } from '@angular/core';
import {Author} from '../model/author';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private authors:Author[] =[];
  private sAuthor!:Author;
  constructor() { 
    let fowler = {
      name: "Fowler",
      quote:"This is the flowler quote",
    },
    twain = {
      name: "Twain",
      quote:"This is the flowler twain"
    },
    poe = {
      name: "Poe",
      quote:"This is the flowler Poe"
    }
    this.authors = [fowler, twain, poe]
  }

  get Authors(){
    return this.authors
  }

  set SelectedAuthor(a:Author){
    this.sAuthor = a;
  }

  get SelectedAuthor(){
    return this.sAuthor;
  }

}
