import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../../services/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: MyserviceService, private routes: Router) { }
  msg!: string;
  ngOnInit() {
  }

  check(uname: string, pwd: string) {
    var output = this.service.checkUserNamePassword(uname, pwd);
    if (output == true) {
      this.routes.navigate(['/admin']);
    }
    else {
      this.msg = 'Invalid username or password';
    }
  }

}
