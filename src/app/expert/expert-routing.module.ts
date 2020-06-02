import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserExpertsComponent } from './user-experts/user-experts.component';


const routes: Routes = [
  { path: 'expert-user', component: UserExpertsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
