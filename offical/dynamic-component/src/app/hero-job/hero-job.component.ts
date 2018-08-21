import { Component, OnInit } from '@angular/core';
import { AdComponent } from '../ad.component'

@Component({
  selector: 'app-hero-job',
  templateUrl: './hero-job.component.html',
  styleUrls: ['./hero-job.component.css']
})
export class HeroJobComponent implements OnInit, AdComponent {

  data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
