import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParentModule } from '@ace/parent'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
