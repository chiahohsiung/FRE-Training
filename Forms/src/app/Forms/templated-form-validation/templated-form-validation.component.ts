import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
@Component({
  selector: 'app-templated-form-validation',
  templateUrl: './templated-form-validation.component.html',
  styleUrls: ['./templated-form-validation.component.scss']
})
export class TemplatedFormValidationComponent implements OnInit {
  model = new User();

  empList:User[] = [];

  hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Singing',
    'Dancing'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.empList.push(form.value);
  }

}
