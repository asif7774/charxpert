import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ReloginComponent } from './relogin/relogin.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [ReloginComponent, ScheduleComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
