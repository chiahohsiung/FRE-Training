import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../../services/dataservice.service';
import {Author} from '../../model/author';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list!:Array<Author>;
  selectedAuthor!:Author;
  constructor(private dataserviceService:DataserviceService) { }

  ngOnInit(): void {
    this.list = this.dataserviceService.Authors;
  }

  selectAuthor(a:Author){
    this.dataserviceService.SelectedAuthor = a;
    this.selectedAuthor = this.dataserviceService.SelectedAuthor;
  }

  isSelected(a:Author){
    return this.selectedAuthor === a;
  }

}
