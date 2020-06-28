import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
  }

  public config: SwiperConfigInterface = {
    //a11y: true,
    direction: 'horizontal',
    keyboard: true,
    loop: true,
    mousewheel: true,
    scrollbar: false,
    observer: true,
    navigation: false,
    pagination: true,
  };
  
}
