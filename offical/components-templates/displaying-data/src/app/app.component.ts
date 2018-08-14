import { Component } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-root',
  // template: `
  // <h1>{{title}}</h1>
  // <h2>My favorite hero is: {{myHero}}</h2>
  // `,
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  hero = new Hero(3, 'cc');
  heroes: Hero[];
  isUnchanged = true;

  constructor() {
    const hero1 = new Hero(1, 'aa');
    const hero2 = new Hero(2, 'bb');
    this.heroes = [hero1, hero2];
  }
}
