import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutModule } from './@layout/customLayout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomLayoutModule,
    FlexLayoutModule,
    NgbModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
