import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { MyExpertsComponent } from './my-experts/my-experts.component';
import { FindExpertsComponent } from './find-experts/find-experts.component';
import { TrackQueryComponent } from './track-query/track-query.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';


@NgModule({
  declarations: [MyExpertsComponent, FindExpertsComponent, TrackQueryComponent, ExpertProfileComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule
  ]
})
export class ExpertModule { }
