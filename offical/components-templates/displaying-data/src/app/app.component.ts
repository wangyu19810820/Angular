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
  isSpecial;
  colspanNum = 2;
  name1 = 'name';
  scriptStr = 'This is <script>alert("OK")</script> .';
  fontSizePx = 20;
  specialArray = ['special', 'bgblue'];
  specialObject = {'bgblue': true, 'special': false};
  styleObject = {'font-size': '24px', 'font-style': 'italic', 'font-weight': 'bold'};
  falseValue = false;
  nullObject: Hero;
  favArr = ['sport', 'music'];
  selectFav: string;

  constructor() {
    const hero1 = new Hero(1, 'aa');
    const hero2 = new Hero(2, 'bb');
    this.heroes = [hero1, hero2];
    this.isSpecial = true;
    this.hero['mark'] = 'abc';
  }

  getValue() {
    return 2;
  }

  btnClick() {
    this.isSpecial = !this.isSpecial;
  }

  inputName(event) {
    this.name1 = event.target.value;
  }

  showHero(hero) {
    alert('id:' + hero.id + ',name:' + hero.name);
  }

  editHeros() {
    const hero1 = new Hero(1, 'aa');
    const hero2 = new Hero(2, 'bbb');
    this.heroes = [hero1, hero2];
  }

  trackById(index: number, hero: Hero): number {
    console.log(hero.id)
    return hero.id;
  }

  callPhone(num: string) {
    alert(num);
  }
}
