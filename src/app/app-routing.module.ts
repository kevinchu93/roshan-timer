import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoshanInfoComponent }  from './roshan-info/roshan-info.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AbilitiesComponent }   from './abilities/abilities.component';
import { LogInComponent }       from './login.component';

const routes: Routes = [
    { path: 'info', component: RoshanInfoComponent },
    { path: 'leaderboards', component: LeaderboardComponent },
    { path: 'abilities', component: AbilitiesComponent },
    { path: 'login', component: LogInComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
