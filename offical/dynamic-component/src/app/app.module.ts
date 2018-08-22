import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobComponent } from './hero-job/hero-job.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [HeroJobComponent, HeroProfileComponent]
})
export class AppModule { }
