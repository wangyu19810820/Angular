import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  heroes = [];

  showMessage() {
    this.message = 'message';
  }

  appendMessage(event: KeyboardEvent) {
    this.message += '|' + (<HTMLInputElement>event.target).value;
  }

  changeMessage(str: string) {
    this.message = str;
  }

  keyEnterMessage(str: string) {
    this.message = str;
  }

  addHero(name: string) {
    this.heroes.push(name);
  }

}
