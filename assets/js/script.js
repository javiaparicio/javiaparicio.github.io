document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // Lazy Loading Images
  const lazyImages = document.querySelectorAll("img.lazy");
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer,
    ) {
      entries.forEach(function (entry) {
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

  // Lightbox Functionality (Only if needed)
  if (document.getElementById("lightbox")) {
    setupLightbox();
  }

  // Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('show');
  });

  // Contact Form Autofill (Only on contact page)
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
  const fullscreenButton = document.getElementById("fullscreen");
  let galleryImages = Array.from(
    document.querySelectorAll(".gallery-image"),
  ).reverse();
  let currentImageIndex = 0;

  function showImage(index) {
    lightboxImg.src = galleryImages[index].dataset.src;
    lightbox.classList.add("show");
    currentImageIndex = index;
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
  });

  document.getElementById("prev")?.addEventListener("click", showPrevImage);
  document.getElementById("next")?.addEventListener("click", showNextImage);
  document
    .getElementById("close")
    ?.addEventListener("click", () => lightbox.classList.remove("show"));

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

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  // Fullscreen Mode
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
    lightbox?.requestFullscreen().catch((err) => {
      console.error("Fullscreen request failed", err);
    });
  } else {
    document.exitFullscreen();
  }
}

function updateFullscreenIcon() {
  const fullscreenButton = document.getElementById("fullscreen");
  if (fullscreenButton) {
    if (document.fullscreenElement) {
      fullscreenButton.innerHTML =
        "<i aria-label='Exit fullscreen' class='fullscreenbutton'>🔲</i>";
    } else {
      fullscreenButton.innerHTML =
        "<i aria-label='Enter fullscreen' class='fullscreenbutton'>⛶</i>";
    }
  }
}

// ----------------------
// CONTACT FORM FUNCTION
// ----------------------
function prefillContactForm() {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const subjectField = document.getElementById("subject");
  if (subjectField) {
    const subjectValue = getQueryParam("subject");
    if (subjectValue) {
      subjectField.value = decodeURIComponent(subjectValue);
    }
  }
}
