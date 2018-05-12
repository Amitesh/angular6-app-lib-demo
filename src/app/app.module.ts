import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TvmazeModule } from 'tvmaze'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TvmazeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
