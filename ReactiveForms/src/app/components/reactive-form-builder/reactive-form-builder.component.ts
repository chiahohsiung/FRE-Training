import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.scss']
})
export class ReactiveFormBuilderComponent implements OnInit {

  rForm!: FormGroup;
  
  states = [
    { id: 1, name: "UP" },
    { id: 2, name: "Maharashtra" },
    { id: 3, name: "Delhi" }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.rForm = this.fb.group({
      firstname: ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      lastname: ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      address: this.fb.group({
        city: ["", Validators.compose([Validators.required])],
        state: ["", Validators.required]
      })
    })

  }


  logForm(form: FormGroup){
    console.log(form.value);
  }

}
