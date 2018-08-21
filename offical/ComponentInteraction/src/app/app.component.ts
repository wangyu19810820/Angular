import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {Hero} from '../hero';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ComponentInteraction';
  heros = [new Hero(1, 'a'), new Hero(2, 'b')];
  master = 'master';
  version1 = 0;
  version2 = 0;
  agreeNum = 0;
  disAgreeNum = 0;
  // 借助本地变量(@ViewChild)实现父子组件中的通信
  @ViewChild(TimerComponent) private timerComponent: TimerComponent;


  constructor() {
  }

  // 在页面加载完成后，将this.seconds(){return 0;}替换为显示倒计时剩余时间的函数
  ngAfterViewInit() {
    setTimeout(() => {
      this.seconds = function() {
        return this.timerComponent.second;
      }
    }, 0);
  }

  addVersion1() {
    this.version1 += 1;
  }

  resetVersion1() {
    this.version1 = 0;
  }

  addVersion2() {
    this.version2 += 1;
  }

  resetVersion2() {
    this.version2 = 0;
  }

  voteResult(r: boolean) {
    console.log(r);
    if (r) {
      this.agreeNum++;
    } else {
      this.disAgreeNum++;
    }
  }

  seconds() { return 0; }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

  reset() {
    this.timerComponent.reset();
  }
}
