import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.scss']
})
export class ReactiveFormArrayComponent implements OnInit {

  skillForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      skills: this.fb.array([])
    });
   }

  ngOnInit(): void {
    
  }


  get skills(): FormArray{
    return this.skillForm.get('skills') as FormArray;
  }

  onSubmit(){
    console.log(this.skillForm.value);
    console.log(this.skillForm.controls.skills)
  }

  newSkill(): FormGroup{
    return this.fb.group({
      skillname: ['', Validators.required],
      exp: ['', Validators.required]
    })
  }
  
  removeSkills(ind:number) {
    this.skills.removeAt(ind);
  }

  addSkills(){
    this.skills.push(this.newSkill());
  }

}
