import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyExpertsComponent } from './my-experts/my-experts.component';


const routes: Routes = [
  { path: 'my-experts', component: MyExpertsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
