import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  users: User[];

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getApiData().subscribe((data:any) => {
      this.users = data['results'][0];
    })
  }

}



interface User {
  first:string;
  last:string;
  email:string;
  address:string;
  created:string;
  balance:string;
}
