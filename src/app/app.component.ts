import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider using swiper js';
  ngOnInit(){
    debugger
    var swiper = new Swiper(".slide-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      slidesPerGroup: 3,
      loop: true,
      // fade:true,
      grabCursor:true,
      // centerSlide:true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    
      },
      navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        520:{
          slidesPerView:2
        },
       768: {
            slidesPerView:3
        },
        1000:{
          slidesPerView:4
        }
      }
    });

  }
}
