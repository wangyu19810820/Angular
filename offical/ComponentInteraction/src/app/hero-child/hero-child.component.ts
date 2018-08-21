import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  // 用输入属性来完成父子组件的数据交换
  @Input() hero: Hero;
  // @Input() masterName: string;
  private _name;

  constructor() { }

  ngOnInit() {
  }

  // 用属性的setter来完成父子组件的数据交换
  @Input()
  set masterName(name: string) {
    this._name = name;
  }

  get masterName() {
    return this._name;
  }

}
