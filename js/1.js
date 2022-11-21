"use strict"


const artworkSwiper = document.querySelector('.swiper-artwork');

if (artworkSwiper) {
  const swiper = new Swiper('.swiper-artwork', {
    // Optional parameters
  
    loop: true,

   // добавляем руку
    grabCursor: true,
   
    // автовисота
    //autoHeight: true,

    // скорость переключения слайдов
    speed: 600,
    

    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      autoHeight: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    
    // Default parameters
  //slidesPerView: 1,
 // spaceBetween: 50,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4.5,
      spaceBetween: 30
    }
  }
  
    // And if we need scrollbar
    //*scrollbar: {
    //  el: '.swiper-scrollbar',
    //},*/
  });
  
}


// ========================  это последний вариант

"use strict"


function initSliders() {
  // перелік слайдерів 
  // перевіряємо наявність слайдера на сторінці
  if (document.querySelector('.swiper-artwork')) {
    const swiper = new Swiper('.swiper-artwork', {
      // Optional parameters
    
      loop: true,
  
     // добавляем руку
      grabCursor: true,
     
      // автовисота
      //autoHeight: true,
  
      // скорость переключения слайдов
      speed: 600,
      
  
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        autoHeight: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
      
      // Default parameters
    //slidesPerView: 1,
   // spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4.5,
        spaceBetween: 30
      }
    }
    
      // And if we need scrollbar
      //*scrollbar: {
      //  el: '.swiper-scrollbar',
      //},*/
    });
    
  };
  if (document.querySelector('.swiper-activity')) {
    const swiper = new Swiper('.swiper-activity', {
      // Optional parameters
    
      loop: true,
  
     // добавляем руку
      grabCursor: true,
     
      // автовисота
      //autoHeight: true,
  
      // скорость переключения слайдов
      speed: 600,
      
  
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        autoHeight: true,
      },
    
      // Navigation arrows
      navigation: {
        nextE1: '.swiper-btn-next',
        prevE1: '.swiper-btn-prev',
        },
      
      // Default parameters
    //slidesPerView: 1,
   // spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.0,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.0,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3.0,
        spaceBetween: 30
      }
    }
    
      // And if we need scrollbar
      //*scrollbar: {
      //  el: '.swiper-scrollbar',
      //},*/
    });
    
  };
  
}



window.addEventListener("load", function (e) {
  //  запуск ініциалізації слайдерів
  initSliders();

  // запуск ініціалізації скрола на базі слайдера по класу свайпер скрол
  initSlidersScroll();
});
	