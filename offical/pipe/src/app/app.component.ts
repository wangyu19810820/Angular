import { Component } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  birthday = new Date();
  formatStr = 'shortDate';
  isShort = true;
  value = 1;
  expo = 1;
  heros = [];

  toggleDateFormat() {
    if (this.isShort) {
      this.isShort = false;
      this.formatStr = 'fullDate';
    } else {
      this.isShort = true;
      this.formatStr = 'shortDate';
    }
  }

  addHero(name) {
    let r = Math.random();
    this.heros.push(new Hero(name, r > 0.5 ? true : false));
  }

  show() {
    this.heros = this.heros.slice();
  }
}
