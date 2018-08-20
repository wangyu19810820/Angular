import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChange, SimpleChanges
} from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges,
      DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
      AfterViewChecked, OnDestroy{

  @Input() hero: Hero;
  oldName = '';

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  // 只有hero整体更改才触发此钩子，hero中的name属性更改并不会触发
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    for (let prop in changes) {
      console.log('prop:' + prop);
      let change = changes[prop];
      let cur  = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      console.log("current:" + cur);
      console.log("prev:" + prev);
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // angular框架不自动检测对象属性值变化，可以用此回调手动检测
  // 但是此函数会非常频繁被调用，任何可能更改模型的事件都会触发此回调，
  // 哪怕绑定属性的文本框失去焦点都会触发此回调
  ngDoCheck(): void {
    console.log('ngDoCheck:' + this.oldName + ',' + this.hero.name);
    console.log('new name and old name is '
        + (this.oldName === this.hero.name ? 'equal' :'not equal'));
    this.oldName = this.hero.name;
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }



}
