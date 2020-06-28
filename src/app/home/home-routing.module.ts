import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AllQueriesComponent } from './all-queries/all-queries.component';
import { FaqComponent } from './faq/faq.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-queries', component: AllQueriesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'query-detail', component: QueryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
