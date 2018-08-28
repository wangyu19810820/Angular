import {Component, Input, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes, group} from '@angular/animations';
import {Hero} from '../hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      // 动画持续时间，延迟时间，动画类型
      transition('inactive=>active', animate('0.2s 1000ms ease-in')),
      transition('active=>inactive', animate('200ms ease-out')),
      transition('void<=>*', animate('2000ms ease-out')),
    ]),
    trigger('flyInOut', [
      // state('inactive', style({transform: 'translateX(0) scale(1)'})),
      transition('void=>*', [
        animate(1000, keyframes([
            style({transform: 'translateX(0%) scale(1)', offset: 0}),
            style({transform: 'translateX(-10%) scale(1)', offset: 0.5}),
            style({transform: 'translateX(-100%) scale(1)', offset: 1}),
          ]
        ))
      ]),
      transition('* => void', [
        group([
          animate(1000, style({transform: 'translateX(100%) scale(1)', height: 0 })),
          animate('100ms', style({opacity: 0}))
        ])
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'animation';
  @Input() heroes: Hero[];

  ngOnInit() {
    this.heroes = [new Hero(1, 'aa', 'inactive'), new Hero(2, 'bb', 'inactive')];
  }

  add() {
    this.heroes.push(new Hero(1, 'cc', 'active'));
  }

  remove() {
    this.heroes.pop();
  }

  animationStart(e) {
    console.log('animationStart' + e);
  }

  animationEnd(e) {
    console.log('animationEnd' + e);
  }
}
