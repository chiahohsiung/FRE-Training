import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  database!:any[];
  filtername="";
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getApi().subscribe(res=>this.database=res)
  }

  

}
