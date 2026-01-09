document.addEventListener("DOMContentLoaded", () => {
  // ====== SWIPER TESTIMONIALS (Web Component) ======
  customElements.whenDefined('swiper-container').then(() => {
    const swiperEl = document.querySelector('.testimonialSwiper');
    const btnPrev = document.querySelector('.arrow-left');
    const btnNext = document.querySelector('.arrow-right');

    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });

      swiperEl.addEventListener('swiperinit', () => {
        if (btnPrev) {
          btnPrev.addEventListener('click', () => {
            swiperEl.swiper.slidePrev();
          });
        }

        if (btnNext) {
          btnNext.addEventListener('click', () => {
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
  // UBAH INI - gunakan .benefits sebagai container
  const benefitsContainer = document.querySelector(".benefits-card_list.swiper");
  const benefitsPrev = document.querySelector(".swiper-button-prev-custom");
  const benefitsNext = document.querySelector(".swiper-button-next-custom");

  if (benefitsContainer && benefitsPrev && benefitsNext) {
    const swiperBenefits = new Swiper(benefitsContainer, {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: benefitsNext,
        prevEl: benefitsPrev,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false,
          allowTouchMove: false,
        }
      }
    });
  } else {
    console.warn('Benefits Swiper: Elemen tidak ditemukan', {
      container: !!benefitsContainer,
      prevBtn: !!benefitsPrev,
      nextBtn: !!benefitsNext
    });
  }
});