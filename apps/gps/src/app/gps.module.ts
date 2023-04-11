import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpsComponent } from './gps.component';


@NgModule({
  declarations: [GpsComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GpsComponent]
})
export class GpsModule {}
