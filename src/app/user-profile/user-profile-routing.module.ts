import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReloginComponent } from './relogin/relogin.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'relogin', component: ReloginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
