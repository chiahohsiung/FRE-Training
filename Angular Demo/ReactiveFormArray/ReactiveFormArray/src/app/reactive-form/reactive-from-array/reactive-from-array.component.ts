import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-from-array',
  templateUrl: './reactive-from-array.component.html',
  styleUrls: ['./reactive-from-array.component.scss']
})
export class ReactiveFromArrayComponent implements OnInit {
  title = 'FormArray Example in Angular Reactive forms';

  skillForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.skillForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.skillForm.get("skills") as FormArray
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.skillForm.value);
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  removeSkills(i: number) {
    this.skills.removeAt(i);
  }

  addSkills(){

    this.skills.push(this.newSkill());
  }

}
