import { Component, OnInit } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit, AdComponent {

  data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
