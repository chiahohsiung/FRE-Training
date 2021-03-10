import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg!:string;
  username!:string;
  password!:string;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('username')){
      this.router.navigate(['/database'])
    }
  }

  checkUser():void{
    // console.log(this.username)
    let status = this.loginService.checkUser(this.username, this.password)
    if(status){
      this.router.navigate(['/database'])
    }
    else{
      this.msg = "Invalid username or password";
    }
  }

}
