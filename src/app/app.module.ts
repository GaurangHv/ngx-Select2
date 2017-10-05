import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LSelect2Module } from 'ngx-select2';

import { AppComponent } from './app.component';
import { AskdComponent } from './askd/askd.component';

@NgModule({
  declarations: [
    AppComponent,
    AskdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
