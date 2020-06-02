import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { UserInboxComponent } from './user-inbox/user-inbox.component';


@NgModule({
  declarations: [UserInboxComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
