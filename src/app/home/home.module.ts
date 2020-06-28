import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FaqComponent } from './faq/faq.component';
import { AllQueriesComponent } from './all-queries/all-queries.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [HomeComponent, FaqComponent, AllQueriesComponent, QueryDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeModule { }
