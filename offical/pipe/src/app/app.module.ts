import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipePipe } from './exponential-strength-pipe.pipe';
import { FlyPipe } from './fly.pipe';
import { NotPureFlyPipe } from './not-pure-fly.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipePipe,
    FlyPipe,
    NotPureFlyPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
