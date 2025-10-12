/**
 * Javi Aparicio Foto WordPress Theme JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll("img.lazy");
    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach((lazyImage) => lazyImageObserver.observe(lazyImage));
    } else {
        lazyImages.forEach((lazyImage) => {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
        });
    }

    // Lightbox Initialization
    if (document.getElementById("lightbox")) {
        setupLightbox();
    }

    // Mobile Menu - Initialize
    initializeMobileMenu();

    // Contact Form Autofill
    if (path.includes("/contact")) {
        prefillContactForm();
    }
});

// ----------------------
// LIGHTBOX FUNCTION
// ----------------------
function setupLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const fullscreenButton = document.getElementById("fullscreen");
    let galleryImages = Array.from(
        document.querySelectorAll(".gallery-image"),
    ).reverse();
    let currentImageIndex = 0;

    function showImage(index) {
        const imgElement = galleryImages[index];
        if (!imgElement) return;

        lightboxImg.src = imgElement.dataset.src;
        lightboxCaption.innerHTML = imgElement.dataset.title || "";

        lightbox.classList.add("show");
        currentImageIndex = index;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => showImage(index));
    });

    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const closeButton = document.getElementById("close");

    if (prevButton) {
        prevButton.addEventListener("click", showPrevImage);
    }
    if (nextButton) {
        nextButton.addEventListener("click", showNextImage);
    }
    if (closeButton) {
        closeButton.addEventListener("click", () => lightbox.classList.remove("show"));
    }

    function showPrevImage() {
        currentImageIndex =
            currentImageIndex === galleryImages.length - 1
                ? 0
                : currentImageIndex + 1;
        showImage(currentImageIndex);
    }

    function showNextImage() {
        currentImageIndex =
            currentImageIndex === 0
                ? galleryImages.length - 1
                : currentImageIndex - 1;
        showImage(currentImageIndex);
    }

    document.addEventListener("keydown", function (event) {
        if (lightbox?.classList.contains("show")) {
            if (event.key === "ArrowLeft") showPrevImage();
            else if (event.key === "ArrowRight") showNextImage();
            else if (event.key === "Escape" || event.code === "Space")
                lightbox.classList.remove("show");
        }
    });

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("show");
            }
        });
    }

    if (fullscreenButton) {
        if (!document.fullscreenEnabled) {
            fullscreenButton.style.display = "none";
        } else {
            fullscreenButton.addEventListener("click", toggleFullScreen);
            document.addEventListener("fullscreenchange", updateFullscreenIcon);
        }
    }
}

function toggleFullScreen() {
    const lightbox = document.getElementById("lightbox");
    if (!document.fullscreenElement) {
        lightbox?.requestFullscreen().catch((err) => console.error("Fullscreen request failed", err));
    } else {
        document.exitFullscreen();
    }
}

function updateFullscreenIcon() {
    const fullscreenButton = document.getElementById("fullscreen");
    if (fullscreenButton) {
        fullscreenButton.innerHTML = document.fullscreenElement
            ? "<i aria-label='Exit fullscreen' class='fullscreenbutton'>🔲</i>"
            : "<i aria-label='Enter fullscreen' class='fullscreenbutton'>⛶</i>";
    }
}

// ----------------------
// CONTACT FORM FUNCTION
// ----------------------
function prefillContactForm() {
    function getQueryParam(param) {
        return new URLSearchParams(window.location.search).get(param);
    }

    const subjectField = document.getElementById("subject");
    if (subjectField) {
        const subjectValue = getQueryParam("subject");
        if (subjectValue) {
            subjectField.value = decodeURIComponent(subjectValue);
        }
    }
}

// ----------------------
// WORDPRESS SPECIFIC FUNCTIONS
// ----------------------

// AJAX functionality for dynamic content loading
function loadMoreImages(postType, page = 1) {
    if (typeof javi_ajax === 'undefined') {
        console.error('AJAX configuration not found');
        return;
    }

    const data = new FormData();
    data.append('action', 'load_more_images');
    data.append('post_type', postType);
    data.append('page', page);
    data.append('nonce', javi_ajax.nonce);

    fetch(javi_ajax.ajax_url, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const gallery = document.querySelector('.gallery');
            if (gallery) {
                gallery.insertAdjacentHTML('beforeend', data.data.html);
                // Re-initialize lazy loading for new images
                initializeLazyLoading();
            }
        }
    })
    .catch(error => {
        console.error('Error loading more images:', error);
    });
}

// Initialize lazy loading for dynamically loaded content
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll("img.lazy:not([data-loaded])");
    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImage.setAttribute('data-loaded', 'true');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach((lazyImage) => lazyImageObserver.observe(lazyImage));
    }
}

// Mobile menu improvements
function initializeMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");

    if (hamburger && sidebar) {
        // Toggle menu on hamburger click
        hamburger.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.toggle("show");
            if (content) {
                content.classList.toggle("shift");
            }
        });

        // Close sidebar when clicking outside
        document.addEventListener("click", function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
                    sidebar.classList.remove("show");
                    if (content) {
                        content.classList.remove("shift");
                    }
                }
            }
        });

        // Close sidebar when clicking on menu links
        const menuLinks = sidebar.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove("show");
                    if (content) {
                        content.classList.remove("shift");
                    }
                }
            });
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

// Gallery keyboard navigation improvements
function initializeGalleryKeyboardNav() {
    document.addEventListener("keydown", function(event) {
        const lightbox = document.getElementById("lightbox");
        if (lightbox && lightbox.classList.contains("show")) {
            switch(event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    const prevButton = document.getElementById("prev");
                    if (prevButton) prevButton.click();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    const nextButton = document.getElementById("next");
                    if (nextButton) nextButton.click();
                    break;
                case 'Escape':
                    event.preventDefault();
                    const closeButton = document.getElementById("close");
                    if (closeButton) closeButton.click();
                    break;
            }
        }
    });
}

// Initialize gallery keyboard navigation
document.addEventListener("DOMContentLoaded", initializeGalleryKeyboardNav);
