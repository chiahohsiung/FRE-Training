import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() keyword: string;
  data = {resultCount: 0, results: []};
  albums:Array<any>;
  select = new FormGroup({
    page: new FormControl()
  });

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  getData(): Observable<any> {
    const url = `https://itunes.apple.com/search?term=${this.keyword}&media=music&entity=album&attribute=artistTerm&limit=500`;
    return this.http.jsonp(url, 'callback');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.keyword) {
      this.getData().subscribe(data => {
        this.data = data;
        this.albums = data.results;
      });
    }
  }

  pageChange(): void {
    this.albums = this.data.results.slice(0, this.select.get('page').value);
  }

}
