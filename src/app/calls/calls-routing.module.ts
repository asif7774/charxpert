import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCallsComponent } from './my-calls/my-calls.component';

const routes: Routes = [
  { path: 'my-calls', component: MyCallsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsRoutingModule { }
