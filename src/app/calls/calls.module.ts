import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { MyCallsComponent } from './my-calls/my-calls.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MyCallsComponent],
  imports: [
    CommonModule,
    CallsRoutingModule,
    NgbModule
  ]
})
export class CallsModule { }
