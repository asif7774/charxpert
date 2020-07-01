import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { UserInboxComponent } from './user-inbox/user-inbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 
@NgModule({
  declarations: [UserInboxComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    NgbModule
  ]
})
export class InboxModule { }
