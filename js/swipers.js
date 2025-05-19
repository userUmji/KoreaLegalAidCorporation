// 메인비주얼 swiper---------------------------
var swiper = new Swiper(".mySwiper01", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  slidesPerView : 1,
});
// quick swiper-------------------------------
var swiper = new Swiper(".mySwiper02", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView : 3,
  breakpoints: {
    // 768px 이상일때 5개
    768: {
      slidesPerView: 5
    }
  }
});
// news swiper--------------------------------
var swiper = new Swiper(".mySwiper03", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper04", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper05", {
  slidesPerView: 3,
  centeredSlides: true,  
  loop: true,   
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 400,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 30,          // 슬라이드 간 간격
    }
  }
});
// 공단소개 스와이퍼
var swiper = new Swiper(".mySwiper06", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView : 1,
  breakpoints: {
    // 768px 이상일때 3개
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  }
});
// footer 로고 스와이퍼
var swiper = new Swiper(".mySwiper07", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, 
  autoplay: true,
  slidesPerView : 3,
  spaceBetween: 10,
  breakpoints: {
    // 768px 이상일때 3개
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});