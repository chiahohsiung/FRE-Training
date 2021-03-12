import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material } from '../libs';

@NgModule({
  declarations: [],
  imports: [CommonModule, Material, FormsModule, ReactiveFormsModule, Material],
  exports: [Material],
})
export class HomeModule {}
