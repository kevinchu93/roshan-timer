import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';

import { AppComponent }             from './app.component';
import { RoshanInfoComponent }      from './roshan-info.component';
import { LeaderboardComponent }     from './leaderboard/leaderboard.component';

import { AppRoutingModule }         from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RoshanInfoComponent,
    LeaderboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
