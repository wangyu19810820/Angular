import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobComponent } from './hero-job/hero-job.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeroJobComponent, HeroProfileComponent]
})
export class AppModule { }
