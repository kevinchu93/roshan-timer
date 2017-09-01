import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoshanInfoComponent }  from './roshan-info.component';

const routes: Routes = [
    { path: 'info', component: RoshanInfoComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
