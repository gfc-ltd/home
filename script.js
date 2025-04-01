document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !navLinks.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                mobileMenu.classList.remove('active');
            }
        });
    });
});

// Function to toggle between English and Hindi
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    
    if (currentLang === 'en') {
        html.setAttribute('lang', 'hi');
    } else {
        html.setAttribute('lang', 'en');
    }
}

// Initialize language based on user's browser settings
document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage;
    const html = document.documentElement;
    
    // Set initial language (default to English if not Hindi)
    if (userLang.startsWith('hi')) {
        html.setAttribute('lang', 'hi');
    } else {
        html.setAttribute('lang', 'en');
    }
}); 