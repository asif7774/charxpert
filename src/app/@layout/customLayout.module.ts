import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
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
