import { Component } from '@angular/core';
import { AnalogWelcome } from './analog-welcome';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [AnalogWelcome, RouterLink],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/">Home</a> | <a routerLink="/about">About</a> |
          <a routerLink="/countdown">Countdown</a>
        </li>
      </ul>
    </nav>
    <app-analog-welcome />
  `,
})
export default class HomeComponent {}
