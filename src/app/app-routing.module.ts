import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),    
    data: { showHeader: false, showSidebar: false, showFooter:false,  compactLayout:false }
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
    data: { showHeader: true, showSidebar: false, showFooter:false,  compactLayout:false }
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule),
    data: { showHeader: true, showSidebar: true, showFooter:false,  compactLayout:false }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
