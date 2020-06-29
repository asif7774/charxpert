import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carIndex: any = 2;

  constructor() {}

  ngOnInit(): void {
  }

  public onIndexChange(index: number): void {
    this.carIndex = index;
  }

  public configNEW: SwiperConfigInterface = {
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    grabCursor: false,
    parallax: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true
  }

  public configNewDuplicate: SwiperConfigInterface = {
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    grabCursor: false,
    parallax: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      520: {
        slidesPerView: 1,
      }      
    }
  }
  
}
