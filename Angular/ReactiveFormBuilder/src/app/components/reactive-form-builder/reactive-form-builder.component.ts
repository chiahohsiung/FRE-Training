import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.scss']
})
export class ReactiveFormBuilderComponent implements OnInit {
  nform!: FormGroup;

  states = [
    { id: 1, position: "UP" },
    { id: 2, position: "DOWN" },
    { id: 3, position: "LEFT" }
  ];

  numList = [1,2,3,4,5]
  countries = ['USA', 'Canada', 'Uk']
  constructor(private fv: FormBuilder) { }

  ngOnInit(): void {

    this.nform = this.fv.group({
      firstName: ["", Validators.compose([Validators.required, Validators.minLength(2),
      Validators.maxLength(20)])],
      lastName: ["", Validators.compose([Validators.required, Validators.minLength(2),
      Validators.maxLength(20)])],
      address: this.fv.group({
        city: ["", Validators.required],
        state: ["", Validators.required],
        zipcode: ["", Validators.required]
      })
    })
    console.log(this.states)
  }

  logForm(form:FormGroup):void{
    if(form.valid){
      console.log(form.value)
    }
  }


}
