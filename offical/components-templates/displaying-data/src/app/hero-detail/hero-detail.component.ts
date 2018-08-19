import {Component, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../../hero';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // 起别名，hero是外部引用名，heroInner是内部用名
  @Input('hero') heroInner: Hero;
  @Output() clickShowHero = new EventEmitter<Hero>();

  // 内部属性和事件绑定，无需@Input，@Output
  desc = 'HeroDetailComponent';

  constructor() { }

  ngOnInit() {
  }

  show() {
    console.log('bbbbb' + this.clickShowHero);
    this.clickShowHero.emit(this.heroInner);
  }

}
