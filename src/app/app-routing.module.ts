import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),    
    data: { showHeader: false, showSidebar: false, showFooter:false,  compactLayout:false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
