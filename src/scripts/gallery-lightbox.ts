type Slide = {
  src: string;
  alt: string;
  captionHtml: string;
  width: number;
  height: number;
};
type Labels = { close: string; prev: string; next: string; of: string };

function initGallery(gallery: Element): void {
  if (gallery.getAttribute('data-wired') === '1') return;
  gallery.setAttribute('data-wired', '1');

  const jsonEl = gallery.querySelector('[data-lightbox-json]');
  let payload: { slides: Slide[]; labels: Labels } | null = null;
  try {
    payload = JSON.parse(jsonEl?.textContent || 'null');
  } catch {
    payload = null;
  }
  if (!payload?.slides?.length) return;
  const { slides, labels } = payload;

  let open = false;
  let index = 0;
  let touchX: number | null = null;
  let lastFocus: HTMLElement | null = null;
  let overlay: HTMLDivElement | null = null;

  const close = () => {
    if (!overlay) return;
    open = false;
    overlay.remove();
    overlay = null;
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKey);
    lastFocus?.focus();
  };

  const render = () => {
    if (!overlay) return;
    const slide = slides[index]!;
    const img = overlay.querySelector('img')!;
    img.src = slide.src;
    img.alt = slide.alt;
    img.width = slide.width;
    img.height = slide.height;
    const counter = overlay.querySelector('[data-counter]')!;
    counter.textContent = `${index + 1} ${labels.of} ${slides.length}`;
    const caption = overlay.querySelector<HTMLElement>('[data-caption]');
    if (caption) {
      caption.innerHTML = slide.captionHtml || '';
    }
    overlay.setAttribute('aria-label', `${index + 1} ${labels.of} ${slides.length}`);
  };

  const onKey = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      index = (index + 1) % slides.length;
      render();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      index = (index - 1 + slides.length) % slides.length;
      render();
    }
  };

  const openAt = (i: number) => {
    index = Math.max(0, Math.min(i, slides.length - 1));
    lastFocus = document.activeElement as HTMLElement | null;
    open = true;
    document.body.style.overflow = 'hidden';

    overlay = document.createElement('div');
    overlay.className = 'lb';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = `
        <button type="button" class="lb__backdrop" aria-label="${labels.close}"></button>
        <div class="lb__frame"><img alt="" decoding="async" /></div>
        <p class="lb__caption" data-caption></p>
        <div class="lb__toolbar">
          <span data-counter></span>
          <button type="button" class="lb__btn" data-close>${labels.close}</button>
        </div>
        ${
          slides.length > 1
            ? `<button type="button" class="lb__nav lb__nav--prev" aria-label="${labels.prev}">‹</button>
               <button type="button" class="lb__nav lb__nav--next" aria-label="${labels.next}">›</button>`
            : ''
        }
      `;
    document.body.appendChild(overlay);
    render();

    overlay.querySelector('.lb__backdrop')?.addEventListener('click', close);
    overlay.querySelector('[data-close]')?.addEventListener('click', close);
    overlay.querySelector('.lb__nav--prev')?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      render();
    });
    overlay.querySelector('.lb__nav--next')?.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      render();
    });

    overlay.addEventListener(
      'touchstart',
      (e) => {
        touchX = e.changedTouches[0]?.clientX ?? null;
      },
      { passive: true },
    );
    overlay.addEventListener(
      'touchend',
      (e) => {
        if (touchX == null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchX;
        const delta = endX - touchX;
        if (Math.abs(delta) > 50) {
          index =
            delta < 0
              ? (index + 1) % slides.length
              : (index - 1 + slides.length) % slides.length;
          render();
        }
        touchX = null;
      },
      { passive: true },
    );

    window.addEventListener('keydown', onKey);
    (overlay.querySelector('[data-close]') as HTMLButtonElement | null)?.focus();
  };

  gallery
    .querySelectorAll<HTMLButtonElement>('.gallery__trigger, .masonry-gallery__trigger')
    .forEach((btn) => {
      btn.addEventListener('click', () => openAt(Number(btn.dataset.index ?? 0)));
    });
}

function boot(): void {
  document.querySelectorAll('[data-gallery]').forEach(initGallery);
}

boot();
document.addEventListener('astro:page-load', boot);
