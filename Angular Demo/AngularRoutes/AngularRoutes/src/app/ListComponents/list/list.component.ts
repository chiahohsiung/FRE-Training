import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service.service';
import { Author } from '../../Interfaces/app.author';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list!: Array<Author>;
  selectedAuthor!: Author;

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.list = this.dService.Authors;
  }

  selectAuthor(a: Author) {
    this.dService.SelectedAuthor = a;
    this.selectedAuthor = this.dService.SelectedAuthor;
  }

  isSelected(a: Author) {
    return this.selectedAuthor === a;   
  }

}
