import { Injectable } from '@angular/core';
import { Author } from '../Interfaces/app.author';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private authors: Array<Author>;
  private sAuthor!: Author;

  constructor() {
    var fowler = {
      name: "Fowler",
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
    },
      twain = {
        name: "Twain",
        quote: "Why, I have known clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a 'flush.' It is enough to make one ashamed of one's species."
      },
      poe = {
        name: "Poe",
        quote: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before."
      },
      plato = {
        name: "Plato",
        quote: "All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else. "
      };

    this.authors = [twain, fowler, poe, plato];
  }

  get Authors() {
    return this.authors;
  }

  set SelectedAuthor(a: Author) {
    this.sAuthor = a;
  }

  get SelectedAuthor() {
    return this.sAuthor;
  }
}
