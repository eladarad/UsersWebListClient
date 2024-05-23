import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [],
  declarations: []
})
export class AppModule { }
