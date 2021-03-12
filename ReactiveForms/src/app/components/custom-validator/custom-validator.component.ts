import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { gte } from './gte.validator';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      numVal: ["", Validators.compose([Validators.required, gte])]
    })
   }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.myForm.value);
    console.log(this.myForm.get('numVal'));
    console.log(this.myForm.get('numVal').value);
    console.log(this.myForm.get('numVal').errors);
    console.log(this.myForm.get('numVal').hasError('gte'));
  }

}
