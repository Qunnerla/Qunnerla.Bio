        const slideElements = document.querySelectorAll('.swiper-slide');
        const totalSlides = slideElements.length;

        const swiper = new Swiper(".mySwiper", {
            effect: "creative",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            
            initialSlide: totalSlides - 1, 
            
            slideToClickedSlide: true,
            creativeEffect: {
                limitProgress: 2, 
                prev: { translate: ["-60%", "10%", -250], rotate: [0, 0, -5], origin: "bottom center" },
                next: { translate: ["60%", "10%", -250], rotate: [0, 0, 5], origin: "bottom center" },
            },
            keyboard: { enabled: true },
            
            autoplay: {
                delay: 1800, 
                disableOnInteraction: false, 
            }
        });

        // 🛑 หยุดรออนิเมชันเปิดเว็บ
        swiper.autoplay.stop();

        setTimeout(() => {
            swiper.slideTo(0, 2000); 

            swiper.once('slideChangeTransitionEnd', () => {
                if(swiper.activeIndex === 0) {
                    swiper.autoplay.start();
                }
            });
        }, 1000); 

        // ระบบปุ่มเปลี่ยนโหมดสี
        const themeBtn = document.getElementById('themeBtn');
        const body = document.body;
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            themeBtn.innerText = '🌙'; 
        }
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode'); 
            if (body.classList.contains('light-mode')) {
                themeBtn.innerText = '🌙'; 
                localStorage.setItem('theme', 'light'); 
            } else {
                themeBtn.innerText = '☀️'; 
                localStorage.setItem('theme', 'dark'); 
            }
        });