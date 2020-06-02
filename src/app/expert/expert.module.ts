import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { UserExpertsComponent } from './user-experts/user-experts.component';


@NgModule({
  declarations: [UserExpertsComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule
  ]
})
export class ExpertModule { }
