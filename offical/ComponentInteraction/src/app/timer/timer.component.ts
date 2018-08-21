import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  message = '';
  second = 10;
  intervalId = 0;

  constructor() { }

  ngOnInit() {
  }

  start() { 
    this.message = `time is: ${this.second}`;
    this.intervalId = window.setInterval(() => {
      this.second--;
      this.message = `time is: ${this.second}`;
      if (this.second <= 0) {
        this.stop();
      }
    }, 1000);
  }

  stop()  {
    clearInterval(this.intervalId);
    this.message = `Holding at T${this.second} seconds`;
  }

  reset() {
    clearInterval(this.intervalId);
    this.second = 10;
    this.message = '';
  }
}
