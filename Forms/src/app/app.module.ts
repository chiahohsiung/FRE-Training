import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { Material } from './libs';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [
    Material,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /** Always import FormsModule and
     * Reactive Forms Module on the top level module -
     * if using any of these */
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Material],
})
export class AppModule {}
