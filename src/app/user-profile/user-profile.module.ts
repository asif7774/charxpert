import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ReloginComponent } from './relogin/relogin.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReloginComponent, ScheduleComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    TagInputModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserProfileModule { }
