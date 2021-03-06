import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templated-form',
  templateUrl: './templated-form.component.html',
  styleUrls: ['./templated-form.component.scss']
})
export class TemplatedFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logForm(form:any){
    console.log(form.value);
  }

}
