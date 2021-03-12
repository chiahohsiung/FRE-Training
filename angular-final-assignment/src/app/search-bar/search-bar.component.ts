import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchAlbumService } from '../search-album.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchResult = new EventEmitter<any>();

  myForm = this.fb.group({
    content:['', Validators.required]
  })
  faSearch = faSearch;
  constructor(private fb:FormBuilder, private albumService: SearchAlbumService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const term = this.myForm.get('content').value;
    this.albumService.getAlbums(term).subscribe(
      response => {
        console.log(response);
        this.searchResult.emit(response);
      }
    );
  }

}
