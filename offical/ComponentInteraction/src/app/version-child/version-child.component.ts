import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() versionNum1: number;
  @Input() versionNum2: number;
  changeLog = [];

  constructor() { }

  ngOnInit() {
  }

  // 用OnChanges回调，实现父子组件的数据交换
  // SimpleChanges类型就是{[propKey: string]: SimpleChange
  // 一个是单数，一个是复数
  ngOnChanges(changes: SimpleChanges) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      // 第一次赋值
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
