import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {
  person = {
    email: '',
    password: '',
    terms: false,
    food:'',
    NotMeat:false,
    NotChicken: false,
    NotFish: false

  }

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm){
    console.log(form.value)
    console.log(this.person)

  }
}
