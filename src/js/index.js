import '../styles/style.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


// Свайпер 1
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  
      let swiper;
    
      breakpoint = window.matchMedia(breakpoint);
    
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
      resizableSwiper(
        '(max-width: 767px)',
        '.swiper.slider-1',
        {
          loop: true,
          spaceBetween: -50,
          slidesPerView: 'auto', 
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        }
  
      ); 
  });

// Свайпер 2
  window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper2 = (breakpoint, swiperClass, swiperSettings) => {
  
      let swiper2;
    
      breakpoint = window.matchMedia(breakpoint);
    
      const enableSwiper = function(className, settings) {
        swiper2 = new Swiper(className, settings);
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper2 !== undefined) swiper2.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
      resizableSwiper2(
        '(max-width: 767px)',
        '.swiper.slider-2',
        {
          loop: true,
          spaceBetween: -50,
          slidesPerView: 'auto', 
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        }
  
      ); 
  });

// Свайпер 3
window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper3 = (breakpoint, swiperClass, swiperSettings) => {

    let swiper3;
  
    breakpoint = window.matchMedia(breakpoint);
  
    const enableSwiper = function(className, settings) {
      swiper3 = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

    resizableSwiper3(
      '(max-width: 767px)',
      '.swiper.slider-3',
      {
        loop: true,
        spaceBetween: -50,
        slidesPerView: 'auto', 
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }

    ); 
});  


// Кнопки к свайперу 1
let buttonSwiperShow = document.querySelector('.swiper-block__button_swiper-show');
let buttonSwiperHide = document.querySelector('.swiper-block__button_swiper-hide');
let wieSwiper = document.querySelectorAll('.wieSwiper');

  function checkScreenSizeSwiper() {
    if (window.innerWidth >= 768) {
        buttonSwiperShow.addEventListener('click', function(evt) {
            evt.preventDefault();
            wieSwiper.forEach(item => item.classList.remove('swiper-slide_swiper-close'));
            buttonSwiperShow.classList.toggle('swiper-block__button_swiper-close');
            buttonSwiperHide.classList.toggle('swiper-block__button_swiper-close');
        });

        buttonSwiperHide.addEventListener('click', function() {
            wieSwiper.forEach(item => item.classList.add('swiper-slide_swiper-close'));
            buttonSwiperShow.classList.toggle('swiper-block__button_swiper-close');
            buttonSwiperHide.classList.toggle('swiper-block__button_swiper-close');
        });
    } 
}
checkScreenSizeSwiper();


// Кнопки к свайперу 2
let buttonSwiperShow2 = document.querySelector('.swiper-block2__button2_swiper-show');
let buttonSwiperHide2 = document.querySelector('.swiper-block2__button2_swiper-hide');
let wieSwiper2 = document.querySelectorAll('.wieSwiper2');

  function checkScreenSizeSwiper2() {
    if (window.innerWidth >= 768) {
        buttonSwiperShow2.addEventListener('click', function(evt) {
            evt.preventDefault();
            wieSwiper2.forEach(item => item.classList.remove('swiper-slide2_swiper-close'));
            buttonSwiperShow2.classList.toggle('swiper-block2__button2_swiper-close');
            buttonSwiperHide2.classList.toggle('swiper-block2__button2_swiper-close');
        });

        buttonSwiperHide2.addEventListener('click', function() {
            wieSwiper2.forEach(item => item.classList.add('swiper-slide2_swiper-close'));
            buttonSwiperShow2.classList.toggle('swiper-block2__button2_swiper-close');
            buttonSwiperHide2.classList.toggle('swiper-block2__button2_swiper-close');
        });
    } 
}
checkScreenSizeSwiper2();


// // // Скрипт к каталогу 1 блока
document.addEventListener('DOMContentLoaded', function() {
  const focusElements = document.querySelectorAll('.catalog__item_focus');

  // Обработчик клика на элементах каталога
  focusElements.forEach((element) => {
    element.addEventListener('click', function(event) {
      event.currentTarget.focus({ preventScroll: true });
    });
  });

  // Обработчик смены фокуса
  document.addEventListener('focusout', function(event) {
    const target = event.target;                     // Потерявший фокус элемент
    const relatedTarget = event.relatedTarget;       // Элемент, получивший фокус

    // Исключаем элементы, находящиеся внутри игнорируемых блоков
    if (target.closest('.ignore-focus-control') || relatedTarget?.closest('.ignore-focus-control')) {
      return; // Пропустить обработку, если затронуты игнорируемые элементы
    }

    if (!relatedTarget || !relatedTarget.closest('.catalog__item_focus')) {
      target.focus({ preventScroll: true });
    }
  });
});


//  Скрипт к кнопке "читать далее"
let buttonShow = document.querySelector('.about-us__link-button_show');
let buttonHide = document.querySelector('.about-us__link-button_hide');
let infoBlocks = document.querySelectorAll('.about-us__info_hidden');

function checkScreenSize() {
        buttonShow.addEventListener('click', function(evt) {
            evt.preventDefault();
            infoBlocks.forEach(item => item.classList.remove('about-us__info_hidden'));
            buttonShow.classList.toggle('about-us__link-button_hidden');
            buttonHide.classList.toggle('about-us__link-button_hidden');
        });

        buttonHide.addEventListener('click', function() {
            infoBlocks.forEach(item => item.classList.add('about-us__info_hidden'));
            buttonShow.classList.toggle('about-us__link-button_hidden');
            buttonHide.classList.toggle('about-us__link-button_hidden');
        });
}
checkScreenSize();



//Скрипт к бургеру Menu
let buttonNav = document.querySelector('.navbar__button');
let menu = document.querySelector('.menu'); // здесь один элемент, а не список
let menuClose = document.querySelector('.menu-header__input-close'); 
let overlay = document.querySelector('.overlay');


buttonNav.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('menu_hidden');
    overlay.classList.toggle('overlay_visible');
});

menuClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('menu_hidden');
    overlay.classList.toggle('overlay_visible');
});

overlay.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('menu_hidden');
    overlay.classList.remove('overlay_visible');
});



// Скрипт к форме обратной связи
let buttonFB = document.querySelector('.contact-list__link-message');
let buttonFB2 = document.querySelector('.menu-footer__container-input_close');
let feedback = document.querySelector('.feedback');
let feedbackClose = document.querySelector('.feedback-header__container-input-close');

function toggleFeedback() {
  if (call.classList.contains('call_hidden')) {
      call.classList.remove('call_hidden');
      overlay.classList.remove('overlay_visible');
  }
  feedback.classList.toggle('feedback_hidden');
  overlay.classList.toggle('overlay_visible');
}

function menuCls() {
  menu.classList.toggle('menu_hidden');
  overlay.classList.add('overlay_visible');
}

buttonFB.addEventListener('click', toggleFeedback);
buttonFB2.addEventListener('click', toggleFeedback);
buttonFB2.addEventListener('click', menuCls);
feedbackClose.addEventListener('click', toggleFeedback);


overlay.addEventListener('click', function(e) {
    e.preventDefault();
    feedback.classList.remove('feedback_hidden');
    overlay.classList.remove('overlay_visible');
});


// Скрипт к форме обратной связи
let buttonCl = document.querySelector('.contact-list__link-call');
let buttonCl2 = document.querySelector('.menu-footer__container-input_call');
let call = document.querySelector('.call');
let callClose = document.querySelector('.call-header__container-input-close');

function toggleCall() {
  if (feedback.classList.contains('feedback_hidden')) {
    feedback.classList.remove('feedback_hidden');
    overlay.classList.remove('overlay_visible');
  }
  call.classList.toggle('call_hidden');
  overlay.classList.toggle('overlay_visible');
}

function menuClsCall() {
  menu.classList.toggle('menu_hidden');
  overlay.classList.add('overlay_visible');
}

buttonCl.addEventListener('click', toggleCall);
buttonCl2.addEventListener('click', toggleCall);
buttonCl2.addEventListener('click', menuClsCall);
callClose.addEventListener('click', toggleCall);


overlay.addEventListener('click', function(e) {
    e.preventDefault();
    call.classList.remove('call_hidden');
    overlay.classList.remove('overlay_visible');
});