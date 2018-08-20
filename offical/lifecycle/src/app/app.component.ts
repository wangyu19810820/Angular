import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lifecycle';
  curHero: Hero;
  toggle = true;

  constructor() {
    this.curHero = new Hero(1, 'aa');
  }

  ngOnInit(): void {
  }

  updateHero() {
    this.curHero = new Hero(this.curHero.id + 1,
      this.curHero.name +'a');
  }

  updateHeroName() {
    this.curHero.name = this.curHero.name + 'a';
  }
}
