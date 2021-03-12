import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-templated-form',
  templateUrl: './templated-form.component.html',
  styleUrls: ['./templated-form.component.scss'],
})
export class TemplatedFormComponent implements OnInit {
  users: User[] = [];
  curUser: User = {
    name: '',
    contact: '',
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.users.push(form.value);
  }
}
