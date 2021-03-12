import { StorageService } from './../storage.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form = new FormGroup({
    search: new FormControl()
  });
  keyword = '';

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    const previous: string = this.storage.get();
    if (previous) {
      this.form.setValue({search: previous})
      this.keyword = previous;
    }
  }

  onSubmit(): void {
    this.storage.set(this.form.get('search').value);
    this.keyword = this.form.get('search').value;
  }

}
