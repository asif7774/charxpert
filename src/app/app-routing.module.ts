import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './home/signup/signup.component';
import { SignupProcessComponent } from './home/signup-process/signup-process.component';


const routes: Routes = [  
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),    
    data: { showHeader: false, showSidebar: false, showFooter:false,  compactLayout:false }
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    component: SignupProcessComponent,
    data: { showHeader: false, showSidebar: false, showFooter:false,  compactLayout:false }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
