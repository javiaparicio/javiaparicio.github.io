document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  setupLazyGalleryImages();
  setupContactData();
  setupLangPreference();
  setupMobileMenu();

  if (document.getElementById("lightbox")) {
    setupLightbox();
  }

  if (path.includes("/contact") || path.includes("/kontakt") || path.includes("/contacto")) {
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
// CONTACT DATA (loaded client-side to reduce scraper harvesting)
// ----------------------
let contactDataCache = null;

function decodeContactPayload(raw) {
  return {
    email: atob(raw.e),
    phone: atob(raw.p),
  };
}

function loadContactData() {
  if (!contactDataCache) {
    contactDataCache = fetch("/contact.json")
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(decodeContactPayload)
      .catch(function (error) {
        contactDataCache = null;
        console.error("Error loading contact data:", error);
        throw error;
      });
  }
  return contactDataCache;
}

function whatsappUrlFromPhone(phone) {
  const digits = String(phone || "").replace(/[^\d+]/g, "").replace(/^\+/, "");
  return digits ? "https://wa.me/" + digits : "";
}

function setupContactData() {
  const fields = document.querySelectorAll(".contact-protected[data-contact-field]");
  const whatsappLinks = document.querySelectorAll(".js-whatsapp-link");
  if (!fields.length && !whatsappLinks.length) return;

  loadContactData()
    .then(function (data) {
      fields.forEach(function (el) {
        const field = el.getAttribute("data-contact-field");
        const value = data[field];
        if (!value) return;

        if (field === "email") {
          const link = document.createElement("a");
          link.href = "mailto:" + value;
          link.textContent = value;
          el.replaceChildren(link);
        } else {
          el.textContent = value;
        }
      });

      const wa = whatsappUrlFromPhone(data.phone);
      if (wa) {
        whatsappLinks.forEach(function (link) {
          link.href = wa;
        });
      }
    })
    .catch(function () {});
}

// ----------------------
// MOBILE MENU
// ----------------------
function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("nav-backdrop");
  if (!hamburger || !sidebar) return;

  const openLabel = hamburger.getAttribute("aria-label") || "Open menu";
  const closeLabels = {
    de: "Menü schliessen",
    es: "Cerrar menú",
    en: "Close menu",
  };
  const lang = (document.documentElement.lang || "en").slice(0, 2);
  const closeLabel = closeLabels[lang] || closeLabels.en;

  function isOpen() {
    return sidebar.classList.contains("show");
  }

  function setOpen(open) {
    sidebar.classList.toggle("show", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    hamburger.setAttribute("aria-label", open ? closeLabel : openLabel);
    document.body.classList.toggle("nav-open", open);
    if (backdrop) {
      backdrop.classList.toggle("show", open);
      backdrop.hidden = !open;
      backdrop.setAttribute("aria-hidden", open ? "false" : "true");
    }
  }

  hamburger.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  backdrop?.addEventListener("click", function () {
    setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      hamburger.focus();
    }
  });

  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setOpen(false);
      }
    });
  });
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
  if (!img.dataset.src || img.getAttribute("src")) return;
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
// LIGHTBOX
// ----------------------
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const fullscreenButton = document.getElementById("fullscreen");
  const closeButton = document.getElementById("close");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let galleryImages = Array.from(document.querySelectorAll(".gallery-image"));
  if (!galleryImages.length) return;
  galleryImages = galleryImages.reverse();
  let currentImageIndex = 0;
  let lastFocused = null;
  const focusables = [fullscreenButton, prevButton, nextButton, closeButton].filter(Boolean);

  function getFocusable() {
    return focusables.filter(function (el) {
      return el && el.offsetParent !== null && !el.disabled && el.style.display !== "none";
    });
  }

  function openLightbox() {
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.classList.add("show");
    document.body.classList.add("lightbox-open");
    (closeButton || lightbox).focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (document.fullscreenElement === lightbox) {
      document.exitFullscreen().catch(function () {});
    }
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function showImage(index) {
    const imgElement = galleryImages[index];
    if (!imgElement) return;

    if (!imgElement.getAttribute("src") && imgElement.dataset.src) {
      loadGalleryImage(imgElement);
    }
    lightboxImg.src = galleryImageUrl(imgElement);
    lightboxImg.alt = imgElement.alt || "";
    lightboxCaption.innerHTML = imgElement.dataset.title || "";
    currentImageIndex = index;
    if (!lightbox.classList.contains("show")) openLightbox();
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showImage(index);
      }
    });
  });

  prevButton?.addEventListener("click", showPrevImage);
  nextButton?.addEventListener("click", showNextImage);
  closeButton?.addEventListener("click", closeLightbox);

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
    if (!lightbox.classList.contains("show")) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevImage();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextImage();
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === "Tab") {
      const items = getFocusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
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
  const label = isFullscreen
    ? fullscreenButton.dataset.labelExit
    : fullscreenButton.dataset.labelEnter;
  if (label) fullscreenButton.setAttribute("aria-label", label);
}

// ----------------------
// CONTACT FORM
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
