// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';
    
    // Function to switch language
    function switchLanguage(lang) {
        // Update button states
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Show/hide language-specific content
        const enElements = document.querySelectorAll('.en-text');
        const ptElements = document.querySelectorAll('.pt-text');
        
        if (lang === 'en') {
            enElements.forEach(el => el.style.display = 'block');
            ptElements.forEach(el => el.style.display = 'none');
        } else {
            enElements.forEach(el => el.style.display = 'none');
            ptElements.forEach(el => el.style.display = 'block');
        }
        
        currentLang = lang;
        
        // Update HTML lang attribute for accessibility
        document.documentElement.lang = lang;
    }
    
    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            if (selectedLang !== currentLang) {
                switchLanguage(selectedLang);
            }
        });
    });
    
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links (only for same-page anchors)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for pure anchor links (starting with # and no .html)
            if (href && href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
