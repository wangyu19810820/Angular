import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Hero} from '../hero';
import {ViewcheckComponent} from './viewcheck/viewcheck.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked,
    AfterContentInit, AfterContentChecked {
  title = 'lifecycle';
  curHero: Hero;
  toggle = true;
  // @ViewChild代表子组件的引用
  @ViewChild(ViewcheckComponent) viewChild: ViewcheckComponent;
  viewcheckMsg = '';
  oldViewCheckValue: string;
  contentcheckMsg = '';
  oldContentCheckValue: string;

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

  // 视图(含子组件视图)更新的时候，触发此回调，会频繁调用，注意性能
  ngAfterViewChecked(): void {
  //   console.log("AppComponent_ngAfterViewChecked");
  //   let isChange = this.oldViewCheckValue != this.viewChild.heroName;
  //   if (isChange) {
  //     this.oldViewCheckValue = this.viewChild.heroName;
  //     let c = this.viewChild.heroName.length > 10 ? `That's a long name` : '';
  //     // Angular禁止在一个视图已经被组合好之后再更新视图，
  //     // 所以延迟1秒，再在页面显示提示信息
  //     setTimeout(()=>{
  //       this.viewcheckMsg = c;
  //     }, 1000);
  //   }
  //
  }

  ngAfterViewInit(): void {
  //   console.log("AppComponent_ngAfterViewInit");
  }

  ngAfterContentChecked(): void {
    console.log("AppComponent_ngAfterContentChecked");
    let isChange = this.oldViewCheckValue != this.viewChild.heroName;
    if (isChange) {
      this.oldContentCheckValue = this.viewChild.heroName;
      let c = this.viewChild.heroName.length > 10 ? `That's a long name` : '';
      this.contentcheckMsg = c;
    }
  }

  ngAfterContentInit(): void {
    console.log("AppComponent_ngAfterContentInit");
  }
}
