import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  data:any[]=[]
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {  
  }

  getApi(name:any){
    this.httpService.getApi(name.target.value).subscribe(res=>this.data=res.results)
  }

}
