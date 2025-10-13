/**
 * Javi Aparicio Foto WordPress Theme JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;



    // Mobile Menu - Initialize
    initializeMobileMenu();

});



// ----------------------
// WORDPRESS SPECIFIC FUNCTIONS
// ----------------------


// Mobile menu improvements with full accessibility support
function initializeMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    let previousFocus = null;

    if (hamburger && sidebar) {
        // Toggle menu on hamburger click
        hamburger.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });

        // Keyboard support for hamburger button
        hamburger.addEventListener("keydown", function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });

        function toggleMenu() {
            const isOpen = sidebar.classList.contains("show");
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        function openMenu() {
            sidebar.classList.add("show");
            hamburger.setAttribute("aria-expanded", "true");
            if (content) {
                content.classList.add("shift");
            }
            
            // Store the element that had focus before opening menu
            previousFocus = document.activeElement;
            
            // Don't auto-focus the first menu item to avoid visual "selected" appearance
            // Users can navigate with keyboard if needed
            
            // Trap focus within the menu
            trapFocus(sidebar);
        }

        function closeMenu() {
            sidebar.classList.remove("show");
            hamburger.setAttribute("aria-expanded", "false");
            if (content) {
                content.classList.remove("shift");
            }
            
            // Restore focus to the hamburger button
            if (previousFocus) {
                previousFocus.focus();
            } else {
                hamburger.focus();
            }
        }

        // Close sidebar when clicking outside
        document.addEventListener("click", function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
                    closeMenu();
                }
            }
        });

        // Close sidebar when clicking on menu links
        const menuLinks = sidebar.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });

        // Close menu with Escape key
        document.addEventListener("keydown", function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains("show")) {
                closeMenu();
            }
        });
    }

    // Focus trap function
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        // Only trap focus if user is already navigating with keyboard
        let isKeyboardNavigation = false;
        
        element.addEventListener('keydown', function(e) {
            isKeyboardNavigation = true;
            
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
        
        // If user starts keyboard navigation, focus the first element
        element.addEventListener('keydown', function(e) {
            if (isKeyboardNavigation && (e.key === 'Tab' || e.key === 'ArrowDown')) {
                if (firstFocusableElement && document.activeElement === element) {
                    firstFocusableElement.focus();
                }
            }
        });
    }
}

// Mobile menu is initialized in the main DOMContentLoaded event

// Handle window resize
window.addEventListener("resize", function() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    
    if (window.innerWidth > 768) {
        if (sidebar) sidebar.classList.remove("show");
        if (content) content.classList.remove("shift");
    }
});

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling
document.addEventListener("DOMContentLoaded", initializeSmoothScrolling);

