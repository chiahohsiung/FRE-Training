import { Component, OnInit } from '@angular/core';
import {CheckService} from '../../services/check.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;
  msg!:string;
  constructor(private checkService:CheckService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('username')!=null){
      this.router.navigate(['/database'])
    }
  }

  login(){
    let status = this.checkService.check(this.username, this.password)
    if(status){
      this.router.navigate(['/database'])
    }
    else{
      this.msg = "Invalid username or password";
    }
  }


}
