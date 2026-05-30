document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  setupLazyGalleryImages();
  setupContactData();
  setupLangPreference();

  // Lightbox Initialization
  if (document.getElementById("lightbox")) {
    setupLightbox();
  }

  // Mobile Menu
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  hamburger?.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Contact Form Autofill
  if (path.includes("/contact")) {
    prefillContactForm();
  }
});

// ----------------------
// LANGUAGE PREFERENCE (localStorage key jaf_lang)
// ----------------------
function setPreferredLang(lang) {
  if (lang !== "de" && lang !== "en" && lang !== "es") return;
  try {
    localStorage.setItem("jaf_lang", lang);
  } catch (e) {}
}

function setupLangPreference() {
  document.querySelectorAll(".language_selector a[hreflang]").forEach(function (link) {
    link.addEventListener("click", function () {
      setPreferredLang(link.getAttribute("hreflang"));
    });
  });
}

// ----------------------
// CONTACT DATA (legal pages + WhatsApp link)
// ----------------------
let contactDataCache = null;

function loadContactData() {
  if (!contactDataCache) {
    contactDataCache = fetch("/contact.json")
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .catch(function (error) {
        contactDataCache = null;
        console.error("Error loading contact data:", error);
        throw error;
      });
  }
  return contactDataCache;
}

function applyContactData(data) {
  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text != null) el.textContent = text;
  }

  function setEmail(id, email) {
    var el = document.getElementById(id);
    if (!el || !email) return;
    var a = document.createElement("a");
    a.href = "mailto:" + email;
    a.textContent = email;
    el.replaceChildren(a);
  }

  setText("owner", data.owner);
  setText("address", data.address);
  setText("che", data.che);
  setText("phone", data.phone);
  setText("phone2", data.phone);
  setEmail("email", data.email);
  setEmail("email2", data.email);

  var whatsapp = document.querySelector(".js-whatsapp-link");
  if (whatsapp && data.phone) {
    var digits = data.phone.replace(/\D/g, "");
    whatsapp.href = "https://wa.me/" + digits;
  }
}

function setupContactData() {
  var needsData =
    document.querySelector(".js-whatsapp-link") ||
    document.getElementById("email") ||
    document.getElementById("owner");

  if (!needsData) return;

  loadContactData().then(applyContactData);
}

// ----------------------
// LAZY GALLERY IMAGES (blur until loaded)
// ----------------------
function setupLazyGalleryImages() {
  const lazyImages = document.querySelectorAll("img.gallery-image.lazy[data-src]");
  if (!lazyImages.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadGalleryImage(entry.target);
          obs.unobserve(entry.target);
        }
      });
    });
    lazyImages.forEach((img) => observer.observe(img));
  } else {
    lazyImages.forEach(loadGalleryImage);
  }
}

function loadGalleryImage(img) {
  if (!img.dataset.src || img.src) return;
  img.src = img.dataset.src;
  const clearLazy = () => img.classList.remove("lazy");
  if (img.complete) clearLazy();
  else {
    img.addEventListener("load", clearLazy, { once: true });
    img.addEventListener("error", clearLazy, { once: true });
  }
}

function galleryImageUrl(img) {
  return img.currentSrc || img.src || img.dataset.src || "";
}

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
  );
  if (!galleryImages.length) return;
  galleryImages = galleryImages.reverse();
  let currentImageIndex = 0;

  function showImage(index) {
    const imgElement = galleryImages[index];
    if (!imgElement) return;

    if (!imgElement.src && imgElement.dataset.src) {
      loadGalleryImage(imgElement);
    }
    lightboxImg.src = galleryImageUrl(imgElement);
    lightboxCaption.innerHTML = imgElement.dataset.title || "";

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

  if (fullscreenButton) {
    if (!document.fullscreenEnabled) {
      fullscreenButton.style.display = "none";
    } else {
      fullscreenButton.addEventListener("click", toggleFullScreen);
      document.addEventListener("fullscreenchange", updateFullscreenIcon);
      updateFullscreenIcon();
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
  const lightbox = document.getElementById("lightbox");
  const fullscreenButton = document.getElementById("fullscreen");
  if (!fullscreenButton) return;

  const isFullscreen = document.fullscreenElement === lightbox;
  const enter = fullscreenButton.querySelector(".lightbox-fs-enter");
  const exit = fullscreenButton.querySelector(".lightbox-fs-exit");
  if (enter) enter.hidden = isFullscreen;
  if (exit) exit.hidden = !isFullscreen;
  fullscreenButton.setAttribute(
    "aria-label",
    isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
  );
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
