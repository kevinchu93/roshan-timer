import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoshanInfoComponent }  from './roshan-info/roshan-info.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
    { path: 'info', component: RoshanInfoComponent },
    { path: 'leaderboards', component: LeaderboardComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
