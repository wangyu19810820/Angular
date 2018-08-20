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

  ngDoCheck(): void {
    console.log('ngDoCheck' + this.oldName);
    console.log('new name and old name is '
        + (this.oldName == this.hero.name) ? 'equal' :'not equal');
    this.oldName = new String(this.hero.name);
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
