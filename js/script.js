document.addEventListener("DOMContentLoaded", () => {
  // ====== SWIPER TESTIMONIALS (Web Component) ======
  customElements.whenDefined("swiper-container").then(() => {
    const swiperEl = document.querySelector(".testimonialSwiper");
    const btnPrev = document.querySelector(".arrow-left");
    const btnNext = document.querySelector(".arrow-right");

    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        breakpoints: {
        640: { 
          slidesPerView: 1,
          centeredSlides: true 
        },
        1024: { 
          slidesPerView: 3,
          centeredSlides: false 
        },
        }
      }
    );

      swiperEl.addEventListener("swiperinit", () => {
        if (btnPrev) {
          btnPrev.addEventListener("click", () => {
            swiperEl.swiper.slidePrev();
          });
        }

        if (btnNext) {
          btnNext.addEventListener("click", () => {
            swiperEl.swiper.slideNext();
          });
        }
      });

      swiperEl.initialize();
    }
  });

  // ====== MOBILE MENU & DROPDOWN ======
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const nav = document.querySelector("nav");
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  mobileMenu?.addEventListener("click", (e) => {
    e.stopPropagation();
    nav?.classList.add("active");
  });

  closeMenu?.addEventListener("click", () => {
    nav?.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (nav?.classList.contains("active")) {
      if (!nav.contains(e.target) && !mobileMenu?.contains(e.target)) {
        nav.classList.remove("active");
      }
    }
  });

  dropbtn?.addEventListener("click", (e) => {
    if (window.innerWidth <= 992 && dropdownContent) {
      e.preventDefault();
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    }
  });

  // ====== SWIPER BENEFITS (Swiper JS) ======
  const benefitsContainer = document.querySelector(
    ".benefits-card_list.swiper"
  );
  const benefitsPrev = document.querySelector(".benefits-navigation .swiper-button-prev-custom");
  const benefitsNext = document.querySelector(".benefits-navigation .swiper-button-next-custom");

  if (benefitsContainer && benefitsPrev && benefitsNext) {
    const swiperBenefits = new Swiper(benefitsContainer, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      navigation: {
        nextEl: benefitsNext,
        prevEl: benefitsPrev,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
    });
  } else {
    console.warn("Benefits Swiper: Elemen tidak ditemukan", {
      container: !!benefitsContainer,
      prevBtn: !!benefitsPrev,
      nextBtn: !!benefitsNext,
    });
  }

   const citiesContainer = document.querySelector(".cities-card_list.swiper");
  const citiesPrev = document.querySelector(".cities-navigation .swiper-button-prev-custom");
  const citiesNext = document.querySelector(".cities-navigation .swiper-button-next-custom");

  if (citiesContainer && citiesPrev && citiesNext) {
    new Swiper(citiesContainer, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      navigation: {
        nextEl: citiesNext,
        prevEl: citiesPrev,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false, 
        },
      },
    });
  } else {
    console.warn("Cities Swiper: Elemen tidak ditemukan", {
      container: !!citiesContainer,
      prevBtn: !!citiesPrev,
      nextBtn: !!citiesNext,
    });
  }

  const agentsContainer = document.querySelector(".agents-grid.swiper");
let agentsSwiper = undefined;

function initAgentsSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 992) {
    // Aktifkan Swiper hanya di Mobile & Tablet
    if (agentsSwiper === undefined && agentsContainer) {
      agentsSwiper = new Swiper(agentsContainer, {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 24 }
        }
      });
    }
  } else {
    
    if (agentsSwiper !== undefined) {
      agentsSwiper.destroy(true, true);
      agentsSwiper = undefined;
    }
  }
}

window.addEventListener("load", initAgentsSwiper);
window.addEventListener("resize", initAgentsSwiper);
});
