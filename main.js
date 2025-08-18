 /////// Header scroll effect start ///////
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

         /////// Header scroll effect end ///////

/////// Home banner section start ///////

document.addEventListener('DOMContentLoaded', function() {
    const carouselEl = document.getElementById('homeSlider');
    const carousel = new bootstrap.Carousel(carouselEl, {
        interval: 5000,
        pause: false,
        wrap: true,
        touch: true
    });

    // ====== Drag / Swipe control for desktop ======
    let startX = 0;
    let isDown = false;

    carouselEl.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.clientX;
    });

    carouselEl.addEventListener('mouseup', (e) => {
        if (!isDown) return;
        let diff = e.clientX - startX;
        if (diff > 50) {
            carousel.prev(); // swipe right
        } else if (diff < -50) {
            carousel.next(); // swipe left
        }
        isDown = false;
    });

    carouselEl.addEventListener('mouseleave', () => {
        isDown = false;
    });
});

/////// Home banner section end ///////

/////// Testimonials section start ///////

const swiper = new Swiper('.elementor-main-swiper', {
            // Default settings for desktop
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 1000,
            effect: 'slide',
            
            // Equal height slides
            autoHeight: false,
            
            // Responsive breakpoints
            breakpoints: {
                // Mobile (425px and below)
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 4500,
                    }
                },
                
                // Tablet (768px and above)
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                    autoplay: {
                        delay: 5000,
                    }
                },
                
                // Desktop (1024px and above)
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 5000,
                    }
                }
            },
            
            // Additional options for smooth experience
            grabCursor: true,
            centeredSlides: false,
            watchSlidesProgress: true,
            preventClicks: false,
            preventClicksPropagation: false,
        });

        // Pause autoplay on hover for better UX
        const swiperContainer = document.querySelector('.elementor-main-swiper');
        
        swiperContainer.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });
        
        swiperContainer.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });

        // Add smooth transitions for testimonial cards
        const testimonials = document.querySelectorAll('.elementor-testimonial');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        testimonials.forEach(testimonial => {
            testimonial.style.opacity = '0';
            testimonial.style.transform = 'translateY(20px)';
            testimonial.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(testimonial);
        });

        /////// Testimonials section end ///////