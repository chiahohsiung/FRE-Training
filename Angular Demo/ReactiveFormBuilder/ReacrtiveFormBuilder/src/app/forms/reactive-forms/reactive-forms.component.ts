import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  rForm!: FormGroup;

  states = [
    { id: 1, name: "UP" },
    { id: 2, name: "Maharashtra" },
    { id: 3, name: "Delhi" }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //using form builder
    this.rForm = this.fb.group({
      firstname: ["", Validators.compose([Validators.required,
      Validators.minLength(2), Validators.maxLength(30)])],
      lastname: ["", Validators.compose([Validators.required,
      Validators.minLength(2), Validators.maxLength(10)])],
      address: this.fb.group({
        city: ["", Validators.required],
        zip: ["", Validators.required],
        state: ["", Validators.required]
      })
    });
  }

  logForm(frm: FormGroup) {
    if (frm.valid) {
      console.log(frm.value);
    }
  }

}
