import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  // styles: ['h1{background-color:green;} h1{font-size:5px;}', 'h1{font-weight:normal}']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
