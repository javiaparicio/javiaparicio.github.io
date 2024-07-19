document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img.lazy');

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
      // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
        });
    }

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 0;

    function showImage(index) {
        lightboxImg.src = galleryImages[index].dataset.src;
        lightbox.classList.add('show');
        currentImageIndex = index;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
        });
    });

    const prevImage = document.getElementById('prev');
    if (prevImage) {
        prevImage.addEventListener('click', showPrevImage);
    }
    const nextImage = document.getElementById('next');
    if (nextImage) {
        nextImage.addEventListener('click', showNextImage);
    }
    const closeImage = document.getElementById('close');
    if (closeImage) {
        closeImage.addEventListener('click', () => lightbox.classList.remove('show'));
    }
    const fullscreen = document.getElementById('fullscreen');
    if (fullscreen) {
        fullscreen.addEventListener('click', toggleFullScreen);
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex === 0) ? galleryImages.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex === galleryImages.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex);
    }

    document.addEventListener('keydown', function(event) {
        if (lightbox.classList.contains('show')) {
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'Escape' || event.code === 'Space') {
                lightbox.classList.remove('show');
            }
        }
    });
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('show');
            }
        });
    }
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
          lightbox.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          });
        } else {
          document.exitFullscreen();
        }
      }
});