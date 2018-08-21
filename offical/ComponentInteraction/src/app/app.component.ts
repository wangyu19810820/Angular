import { Component } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentInteraction';
  heros = [new Hero(1, 'a'), new Hero(2, 'b')];
  master = 'master';
  version1 = 0;
  version2 = 0;
  agreeNum = 0;
  disAgreeNum = 0;

  constructor() {
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
}
