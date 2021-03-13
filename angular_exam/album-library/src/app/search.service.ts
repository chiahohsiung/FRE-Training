import { Album } from './Album';
import * as fj from 'fetch-jsonp';

export class SearchService {

  public search(term: string) {
    let searchQuery=`https://itunes.apple.com/search?term=${term}&media=music&entity=album&attribute=artistTerm&limit=500`;
    console.log(searchQuery);
    return fj(searchQuery)
    .then(response =>  response.json())
    .then(json => {
      let albumArr = new Array();
      json.results.forEach(album => {
          albumArr.push(new Album(album["artistName"], album["artworkUrl100"], album["collectionName"]));
      });
      return albumArr;
      // console.log(albumArr);
    });
  }
}