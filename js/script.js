// Tunggu sampai elemen kustom terdefinisi
customElements.whenDefined('swiper-container').then(() => {
    const swiperEl = document.querySelector('.testimonialSwiper');

    if (swiperEl) {
        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        };

        // Masukkan parameter ke elemen swiper
        Object.assign(swiperEl, swiperParams);

        // Jalankan inisialisasi
        swiperEl.initialize();

        // Hubungkan tombol navigasi
        const btnPrev = document.querySelector('.arrow-left');
        const btnNext = document.querySelector('.arrow-right');

        btnPrev?.addEventListener('click', () => {
            swiperEl.swiper.slidePrev();
        });

        btnNext?.addEventListener('click', () => {
            swiperEl.swiper.slideNext();
        });
    }
});