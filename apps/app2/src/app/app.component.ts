import { Component } from '@angular/core';

@Component({
  selector: 'largerepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  navigateTo(process) {
    window.open(process, '_self');
  }
}
