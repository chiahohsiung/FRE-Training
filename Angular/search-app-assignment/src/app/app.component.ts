import { Component } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-app-assignment';
  faSearch= faSearch;
  search='';
  itemsPerPage='';
  searchEvenHandler($event: any){

  }
  numberEventHandler($event: any){
    
  }
}
