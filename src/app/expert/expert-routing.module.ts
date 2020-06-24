import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyExpertsComponent } from './my-experts/my-experts.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';
import { TrackQueryComponent } from './track-query/track-query.component';
import { FindExpertsComponent } from './find-experts/find-experts.component';
import { QueryAcknowledgeComponent } from './query-acknowledge/query-acknowledge.component';

const routes: Routes = [
  { path: 'my-experts', component: MyExpertsComponent },
  { path: 'expert-profile', component: ExpertProfileComponent },
  { path: 'track-query', component: TrackQueryComponent },
  { path: 'find-expert', component: FindExpertsComponent },
  { path: 'acknowledge', component: QueryAcknowledgeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
