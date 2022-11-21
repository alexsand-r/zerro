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
        nextEl: '.artwork__arrow--left',
        prevEl: '.artwork__arrow--right',
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
      800: {
        slidesPerView: 4.5,
        spaceBetween: 30
      }
      },
    //автопрокрутка
			autoplay: {
				//пауза між прокрутками
				 delay: 1500, 
				// закінчити прокрутку на останьому слайді
				  stopOnLastSlide: true,
				// відключити після ручного перемикання  
				  disableOnInteraction: false
			  },
			
    
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
        nextEl: '.activity__arrow--left',
        prevEl: '.activity__arrow--right',
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
        slidesPerView: 3.0,
        spaceBetween: 30
      }
      },
    //автопрокрутка
			autoplay: {
				//пауза між прокрутками
				 delay: 1500, 
				// закінчити прокрутку на останьому слайді
				  stopOnLastSlide: true,
				// відключити після ручного перемикання  
				  disableOnInteraction: false
			  },
			
    
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
	