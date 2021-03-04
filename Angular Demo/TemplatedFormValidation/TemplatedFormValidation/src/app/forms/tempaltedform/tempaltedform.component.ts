import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-tempaltedform',
  templateUrl: './tempaltedform.component.html',
  styleUrls: ['./tempaltedform.component.scss']
})
export class TempaltedformComponent implements OnInit {
  model = new User();
  empList: User[] = [];

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Singing',
    'Dancing'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.empList.push(form.value);
  }

}
