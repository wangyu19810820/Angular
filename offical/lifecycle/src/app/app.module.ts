import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewcheckComponent } from './viewcheck/viewcheck.component';
import { ContentcheckComponent } from './contentcheck/contentcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ViewcheckComponent,
    ContentcheckComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
