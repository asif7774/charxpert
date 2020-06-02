import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInboxComponent } from './user-inbox/user-inbox.component';


const routes: Routes = [
  { path: 'user-inbox', component: UserInboxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
