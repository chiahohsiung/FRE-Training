import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material } from '../libs';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SongsComponent } from './songs/songs.component';

@NgModule({
  declarations: [SigninComponent, HomeComponent, SignupComponent, SongsComponent],
  imports: [CommonModule, Material, FormsModule, ReactiveFormsModule],
  exports: [Material],
})
export class PagesModule {}
