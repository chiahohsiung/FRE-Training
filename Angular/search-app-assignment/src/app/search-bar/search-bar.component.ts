import { Component, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {HttpService} from '../service/http-service.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  forms!: FormGroup;
  search=''
  
  constructor(private dservice: HttpService) { }

  ngOnInit(): void {
   
  }
  onSearchSubmit(event: Event){
    event.preventDefault()
    let val= ((document.getElementById('search_input') as HTMLInputElement).value)
    this.dservice.updateSearch(val)
  }
  onChange(){

  }

  faSearch= faSearch

}
