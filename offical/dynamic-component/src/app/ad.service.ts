import { Injectable } from '@angular/core';
import { HeroJobComponent }   from './hero-job/hero-job.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem }               from './ad.item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(HeroJobComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'})
    ];
  }

}
