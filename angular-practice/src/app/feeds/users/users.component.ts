import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  imgUrl: string = '../../../assets/photos/stick-man.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
