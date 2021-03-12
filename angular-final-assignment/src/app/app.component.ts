import { Component } from '@angular/core';
import { Result } from './Result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: Result = { resultCount:"0", results:[]};
  handleResult( rawResult ){
    let resultCount = rawResult.resultCount;
    let results = rawResult.results.map(
      v => ({
        albumName: v.collectionName,
        artistName: v.artistName,
        coverUrl: v.artworkUrl100
      })
    )
    this.result = {
      resultCount: resultCount,
      results: results
    }
  }
}
