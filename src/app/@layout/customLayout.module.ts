import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class CustomLayoutModule { }
