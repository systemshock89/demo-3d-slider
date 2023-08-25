import Swiper from 'swiper';
import { Navigation } from 'swiper';

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const slider = new Swiper('.showcase-carousel', {
        modules: [Navigation],
        loop: true, // work normal in  swiper@8.4.7
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    });

    document.querySelector('.showcase__video').playbackRate = 2; // ускорим видео в 2 раза

});