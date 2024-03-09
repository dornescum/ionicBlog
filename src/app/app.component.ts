import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Blogs', url: '/blogs', icon: 'newspaper' },
    { title: 'Weather', url: '/weather-page', icon: 'partly-sunny' },
    { title: 'Utils', url: '/utilities', icon: 'hammer' },
  ];
  constructor() {}
}
