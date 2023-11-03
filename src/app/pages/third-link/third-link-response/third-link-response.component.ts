import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

import { responseData } from './third-link-reposponse-data';

@Component({
  selector: 'app-third-link-response',
  templateUrl: './third-link-response.component.html',
  styleUrls: ['./third-link-response.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ThirdLinkResponseComponent {
  responses = responseData;

  // swiperConfig: any = {
  //   slidesPerView: '3',
  //   spaceBetween: 20,
  //   pagination: true,
  //   breakpoints: {
  //     700: {
  //       slidePerView: '2',
  //       spaceBetween: '50',
  //     },
  //   },
  // };
}
