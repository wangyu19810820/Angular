import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AdItem } from '../ad.item';
import { AdDirective } from '../ad.directive'
import { AdService } from '../ad.service'

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private adService: AdService) { }

  ngOnInit() {
  }

  loadComponent() {

  }

  getAds() {
    this.ads = this.adService.getAds();
  }

}
