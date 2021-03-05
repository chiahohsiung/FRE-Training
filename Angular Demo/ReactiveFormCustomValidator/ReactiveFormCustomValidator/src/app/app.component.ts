import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { gte } from './customvalidator/gte.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reactive FormCustom Validator';

  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      numVal: new FormControl('', [gte])
    })

  }

  get numVal() {
    return this.myForm.get('numVal');
  }

  OnSubmit() {

    console.log(this.myForm.value);
  }


}
