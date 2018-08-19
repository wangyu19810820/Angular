import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  dec() {
    this.sizeChangeFun(Number(this.size) - 1);
  }
  inc() {
    this.sizeChangeFun(Number(this.size) + 1);
  }

  sizeChangeFun(value) {
    this.size = value;
    if (this.size > 30) {
      this.size = 30;
    }
    if (this.size < 10) {
      this.size = 10;
    }
    this.sizeChange.emit(Number(this.size));
  }

}
