// Animasi Reveal saat Scroll
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

    // Jalankan saat scroll
    window.addEventListener('scroll', revealOnScroll);
    // Jalankan sekali saat halaman dimuat
    revealOnScroll(); 
});

// Smooth Scroll untuk Navigasi (Efek halus saat klik menu)
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

// === NAVIGASI TOMBOL TIMELINE HORIZONTAL ===
document.addEventListener('DOMContentLoaded', () => {
    const timelineWrapper = document.querySelector('.timeline-horizontal-wrapper');
    const prevButton = document.getElementById('timeline-prev');
    const nextButton = document.getElementById('timeline-next');

    if (timelineWrapper && prevButton && nextButton) {
        // Lebar lompatan geser disesuaikan dengan ukuran 2 box item agar pas
        const stepScroll = 460; 

        // Fungsi klik panah kanan
        nextButton.addEventListener('click', () => {
            timelineWrapper.scrollBy({
                left: stepScroll,
                behavior: 'smooth'
            });
        });

        // Fungsi klik panah kiri
        prevButton.addEventListener('click', () => {
            timelineWrapper.scrollBy({
                left: -stepScroll,
                behavior: 'smooth'
            });
        });

        // Sistem Auto-Hide Tombol jika sudah mentok ujung
        const checkUjungScroll = () => {
            const currentScroll = timelineWrapper.scrollLeft;
            const maxScrollPosition = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;

            // Jika di ujung kiri, samarkan tombol prev
            if (currentScroll <= 8) {
                prevButton.style.opacity = '0.15';
                prevButton.style.pointerEvents = 'none';
            } else {
                prevButton.style.opacity = '1';
                prevButton.style.pointerEvents = 'auto';
            }

            // Jika di ujung kanan, samarkan tombol next
            if (currentScroll >= maxScrollPosition - 8) {
                nextButton.style.opacity = '0.15';
                nextButton.style.pointerEvents = 'none';
            } else {
                nextButton.style.opacity = '1';
                nextButton.style.pointerEvents = 'auto';
            }
        };

        // Pasang pendengar event
        timelineWrapper.addEventListener('scroll', checkUjungScroll);
        window.addEventListener('resize', checkUjungScroll);
        
        // Jalankan pemeriksaan pertama kali saat halaman dimuat
        setTimeout(checkUjungScroll, 200);
    }
});

// === NAVIGASI TOMBOL DOKUMENTASI GALERI (INFINITE LOOP) ===
document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevButton = document.getElementById('gallery-prev');
    const nextButton = document.getElementById('gallery-next');

    if (galleryWrapper && prevButton && nextButton) {
        // Jarak geser dihitung dari lebar 1 kartu (460px) + gap (25px) = 485px
        const stepScroll = 485; 

        // Navigasi Panah Kanan
        nextButton.addEventListener('click', () => {
            const currentScroll = galleryWrapper.scrollLeft;
            const maxScrollPosition = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;

            // Jika sudah mentok kanan (toleransi sisa 15px), putar balik ke awal (0)
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

        // Navigasi Panah Kiri
        prevButton.addEventListener('click', () => {
            const currentScroll = galleryWrapper.scrollLeft;
            const maxScrollPosition = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;

            // Jika sudah di ujung awal kiri (toleransi 15px), lompat putar balik ke ujung akhir
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

// === FAQ ACCORDION (FUNGSI BUKA TUTUP) ===
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            
            // FITUR OPSIONAL: Menutup FAQ lain jika satu FAQ ditekan
            const activeItem = document.querySelector('.faq-item.active');
            if (activeItem && activeItem !== currentItem) {
                activeItem.classList.remove('active');
            }

            // Membuka atau Menutup FAQ yang sedang diklik
            currentItem.classList.toggle('active');
        });
    });
});

// === EFEK NAVBAR MELAYANG (FLOATING PILL) ===
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        // Jika layar digulirkan lebih dari 50px ke bawah
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Kembali ke bentuk awal (menempel atap) jika di paling atas
            navbar.classList.remove('scrolled');
        }
    });
});

// === FITUR DARK/LIGHT MODE TOGGLE ===
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Ikon Matahari (Light Mode) & Bulan (Dark Mode) dalam bentuk SVG
    const iconSun = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    const iconMoon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';

    // 1. Cek memori browser (localStorage) untuk melihat pilihan tema peserta sebelumnya
    const currentTheme = localStorage.getItem('theme');
    
    // 2. Jika sebelumnya milih Light Mode, langsung terapkan saat web dibuka
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.innerHTML = iconSun;
    }

    // 3. Fungsi saat tombol ditekan
    themeToggleBtn.addEventListener('click', () => {
        // Balikkan keadaan: dari gelap ke terang, atau terang ke gelap
        document.body.classList.toggle('light-mode');
        
        // Cek mode apa yang sedang aktif sekarang
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light'); // Simpan pilihan terang
            themeIcon.innerHTML = iconSun; // Ganti ikon matahari
        } else {
            localStorage.setItem('theme', 'dark'); // Simpan pilihan gelap
            themeIcon.innerHTML = iconMoon; // Ganti ikon bulan
        }
    });
});

// === FITUR HAMBURGER MENU (KHUSUS MOBILE) ===
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navItemLinks = document.querySelectorAll('.nav-item-link');

    if (hamburger && navMenu) {
        // Buka/Tutup menu saat hamburger diklik
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Tutup menu otomatis setelah salah satu link diklik (Biar layar kembali lega)
        navItemLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});