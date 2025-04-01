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

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
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

// Add loading animation
const loading = document.createElement('div');
loading.className = 'loading';
loading.innerHTML = '<div class="loading-spinner"></div>';
document.body.appendChild(loading);

// Remove loading animation when page is fully loaded
window.addEventListener('load', function() {
    loading.style.display = 'none';
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        this.reset();
        
        // Show success message
        alert(document.documentElement.getAttribute('lang') === 'en' 
            ? 'Thank you for your message. We will get back to you soon!'
            : 'आपके संदेश के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे!');
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }, 1500);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in, .about-card, .product-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
}); 