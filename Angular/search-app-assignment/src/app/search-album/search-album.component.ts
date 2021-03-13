import { Component, OnInit} from '@angular/core';
//import { FormGroup} from '@angular/forms';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Album} from '../interface/album'
import {HttpService} from '../service/http-service.service'

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss']
})
export class SearchAlbumComponent implements OnInit {
  faSearch= faSearch;

  lis:Album[]=[];
  results:Album[]=[];
  searchTerm:any='';
  
  constructor(private dservice: HttpService) { }

  ngOnInit(): void {
    let lastInput= localStorage.getItem('lastInput')
    this.searchTerm= lastInput
    this.getAlbums(lastInput,'Default')
  }

  getAlbums(searchTerm:any, value:any){
    this.dservice.getAlbums(searchTerm).subscribe(res=>{
      this.lis= res.results
      this.render(value)
    })
  }

  onSearchSubmit(event: Event){
    event.preventDefault()
    let val= ((document.getElementById('search_input') as HTMLInputElement).value)
   
    let max= (document.getElementById('select') as HTMLSelectElement).value
    localStorage.setItem('max', max)
    localStorage.setItem('lastInput', val)
    this.searchTerm= val
    this.getAlbums(this.searchTerm,max)
  }
  render(value:any){
    localStorage.setItem('max', value)
    if (value !== 'Default'){
      this.results= this.lis.slice(0,value)
    }
    else this.results= this.lis
  }
  onSelect(event:any, value:any){
    this.render(value)
  }

}
