import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParentModule } from '@ace/parent';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
