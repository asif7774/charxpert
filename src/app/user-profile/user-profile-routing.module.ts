import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReloginComponent } from './relogin/relogin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'relogin', component: ReloginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
