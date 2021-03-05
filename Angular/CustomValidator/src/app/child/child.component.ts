import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {gte} from '../CustomValidators/gte.validator'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  nForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.nForm = new FormGroup({
      number: new FormControl('', [gte])
    })
  }

  get number(){
    return this.nForm.get('number');
  }

  onSubmit(){
    console.log(this.nForm.value)
  }
  
}
