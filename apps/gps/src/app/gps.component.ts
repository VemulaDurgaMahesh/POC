import { Component } from '@angular/core';

@Component({
  selector: 'gps-root',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent {
  title = 'Gps';
  navigateTo(process) {
    window.open(process, '_self');
  }
}
