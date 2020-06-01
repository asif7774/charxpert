import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReloginComponent } from './relogin/relogin.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { ExpertsComponent } from './experts/experts.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'relogin', component: ReloginComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'experts', component: ExpertsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
