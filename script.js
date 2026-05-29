document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }


    window.addEventListener('scroll', revealOnScroll);

    revealOnScroll(); 
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// NAVIGASI TOMBOL TIMELINE HORIZONTAL
document.addEventListener('DOMContentLoaded', () => {
    const timelineWrapper = document.querySelector('.timeline-horizontal-wrapper');
    const prevButton = document.getElementById('timeline-prev');
    const nextButton = document.getElementById('timeline-next');

    if (timelineWrapper && prevButton && nextButton) {

        const stepScroll = 460; 


        nextButton.addEventListener('click', () => {
            timelineWrapper.scrollBy({
                left: stepScroll,
                behavior: 'smooth'
            });
        });


        prevButton.addEventListener('click', () => {
            timelineWrapper.scrollBy({
                left: -stepScroll,
                behavior: 'smooth'
            });
        });


        const checkUjungScroll = () => {
            const currentScroll = timelineWrapper.scrollLeft;
            const maxScrollPosition = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;


            if (currentScroll <= 8) {
                prevButton.style.opacity = '0.15';
                prevButton.style.pointerEvents = 'none';
            } else {
                prevButton.style.opacity = '1';
                prevButton.style.pointerEvents = 'auto';
            }


            if (currentScroll >= maxScrollPosition - 8) {
                nextButton.style.opacity = '0.15';
                nextButton.style.pointerEvents = 'none';
            } else {
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            }
        };


        timelineWrapper.addEventListener('scroll', checkUjungScroll);
        window.addEventListener('resize', checkUjungScroll);

        setTimeout(checkUjungScroll, 200);
    }
});

// NAVIGASI TOMBOL DOKUMENTASI GALERI (INFINITE LOOP)
document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevButton = document.getElementById('gallery-prev');
    const nextButton = document.getElementById('gallery-next');

    if (galleryWrapper && prevButton && nextButton) {

        const stepScroll = 485; 


        nextButton.addEventListener('click', () => {
            const currentScroll = galleryWrapper.scrollLeft;
            const maxScrollPosition = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;


            if (currentScroll >= maxScrollPosition - 15) {
                galleryWrapper.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                galleryWrapper.scrollBy({
                    left: stepScroll,
                    behavior: 'smooth'
                });
            }
        });


        prevButton.addEventListener('click', () => {
            const currentScroll = galleryWrapper.scrollLeft;
            const maxScrollPosition = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;


            if (currentScroll <= 15) {
                galleryWrapper.scrollTo({
                    left: maxScrollPosition,
                    behavior: 'smooth'
                });
            } else {
                galleryWrapper.scrollBy({
                    left: -stepScroll,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// FAQ ACCORDION (FUNGSI BUKA TUTUP)
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;

            const activeItem = document.querySelector('.faq-item.active');
            if (activeItem && activeItem !== currentItem) {
                activeItem.classList.remove('active');
            }


            currentItem.classList.toggle('active');
        });
    });
});

// EFEK NAVBAR MELAYANG
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {

            navbar.classList.remove('scrolled');
        }
    });
});

// FITUR DARK/LIGHT MODE TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    

    const iconSun = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    const iconMoon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';


    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.innerHTML = iconSun;
    }

    // 3. Fungsi saat tombol ditekan
    themeToggleBtn.addEventListener('click', () => {

        document.body.classList.toggle('light-mode');
        
        // Cek mode apa yang sedang aktif sekarang
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.innerHTML = iconSun;
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.innerHTML = iconMoon;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navItemLinks = document.querySelectorAll('.nav-item-link');

    if (hamburger && navMenu) {

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });


        navItemLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});