import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../services/authservice.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg!:string;
  constructor(private authserviceService:AuthserviceService, private routes:Router) { }

  ngOnInit(): void {
  }

  check(uname:string, pwd:string){
    let output = this.authserviceService.check(uname, pwd)
    if(output){
      this.routes.navigate(['/admin'])
    }
    else{
      this.msg = "Invalid username or password";
    }
  }

}
