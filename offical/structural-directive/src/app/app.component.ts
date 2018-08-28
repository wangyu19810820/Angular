import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-directive';
  hasTitle = true;
  boolFlag = false;
  heros = ['aaa', 'bbb', 'ccc', 'ddd'];

  trackById(index: number) {
    return index;
  }

  toggle() {
    this.boolFlag = !this.boolFlag;
  }
}
