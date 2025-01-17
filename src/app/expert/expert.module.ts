import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { MyExpertsComponent } from './my-experts/my-experts.component';
import { FindExpertsComponent } from './find-experts/find-experts.component';
import { TrackQueryComponent } from './track-query/track-query.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QueryAcknowledgeComponent } from './query-acknowledge/query-acknowledge.component';
import { TrackQueryClientComponent } from './track-query-client/track-query-client.component';
import { TrackQueryExpertComponent } from './track-query-expert/track-query-expert.component';
import { ScheduleCallComponent } from './schedule-call/schedule-call.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [MyExpertsComponent, FindExpertsComponent, TrackQueryComponent, ExpertProfileComponent, QueryAcknowledgeComponent, TrackQueryClientComponent, TrackQueryExpertComponent, ScheduleCallComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule,
    CKEditorModule
  ]
})
export class ExpertModule { }
