import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Comment} from '../../models/comment';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  private comments:Comment[]=[];
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    
  }

  getCommentsApi():void{
    this.httpService.getCommentsApi().subscribe(res=>this.comments=res)
  }

  getComments():Comment[]{
    return this.comments
  }
}
