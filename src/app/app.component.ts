import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Blogs', url: '/blogs', icon: 'newspaper' },
    { title: 'Utils', url: '/utilities', icon: 'hammer' },
    { title: 'Users', url: '/users', icon: 'person' },
    { title: 'Weather', url: '/weather-page', icon: 'partly-sunny' },
  ];
  constructor() {}
}
