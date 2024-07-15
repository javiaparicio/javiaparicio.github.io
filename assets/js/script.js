document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentImageIndex = 0;

    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
        currentImageIndex = index;
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

    function showPrevImage() {
      currentImageIndex = (currentImageIndex === 0) ? galleryImages.length - 1 : currentImageIndex - 1;
      lightboxImg.src = galleryImages[currentImageIndex].src;
    }

    function showNextImage() {
      currentImageIndex = (currentImageIndex === galleryImages.length - 1) ? 0 : currentImageIndex + 1;
      lightboxImg.src = galleryImages[currentImageIndex].src;
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
});