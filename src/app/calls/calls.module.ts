import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { MyCallsComponent } from './my-calls/my-calls.component';


@NgModule({
  declarations: [MyCallsComponent],
  imports: [
    CommonModule,
    CallsRoutingModule
  ]
})
export class CallsModule { }
