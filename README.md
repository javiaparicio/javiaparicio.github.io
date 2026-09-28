# Javi Aparicio Foto

Static multilingual portrait photography site for **Javi Aparicio Foto** (Javier Aparicio Ríos Foto) in Bern, Switzerland — [javiapariciofoto.ch](https://javiapariciofoto.ch).

## Stack

- Astro (static output) + TypeScript
- Content Collections for projects
- Automatic image discovery + Astro image optimization
- German (default), English, Spanish
- GitHub Actions → GitHub Pages

---

# How I add photographs

You do **not** edit JSON, YAML image lists, or gallery components.

```text
src/content/projects/
└── example-project/
    ├── project.md
    └── images/
        ├── 01.jpg
        ├── 02.jpg
        └── 03.jpg
```

To add another photograph:

```text
Drop 04.jpg into images/
        ↓
git add .
        ↓
git commit
        ↓
git push
        ↓
GitHub Actions builds the site
        ↓
04.jpg appears automatically
```

**The folder is the gallery.**

---

# How I edit texts

Day-to-day wording lives in **`src/content/editable/`** (JSON + Markdown). You do **not** need TypeScript for normal copy changes.

| Edit | Open |
|------|------|
| **Sobre mí, Contacto, Precios, Gracias** | `pages/*.md` |
| Buttons, nav, home, form labels | `ui.json` |
| Tab titles + SEO + visible H1s | `meta.json` |
| Price packages + FAQ | `pricing.json` |
| Address / phone / email | `src/data/contact.json` (not copy) |

Keep `de`, `en` and `es` in sync. Details: `src/content/editable/README.md`.

Then: `git add` → `git commit` → `git push` (GitHub Actions rebuilds).

---

### Filename ordering

Files are sorted in **reverse** natural order (higher numbers first):

```text
30.jpg
11.jpg
10.jpg
03.jpg
02.jpg
01.jpg
```

Prefer numeric prefixes (`01`, `02`, …). Filenames are not shown to visitors. The cover defaults to the first file after this sort (highest number).

### Supported formats

`jpg` / `jpeg` / `png` / `webp` / `avif` (uppercase extensions work too).

### Cover image

By default the first image (after reverse natural sort) is the cover.

Optional override in `project.md`:

```yaml
cover: 03.jpg
```

### Featured projects (homepage)

```yaml
featured: true
```

### Drafts

```yaml
draft: true
```

Drafts are omitted from production listings.

---

## Site structure

Primary navigation:

**Portfolio · Preise · Über mich · Kontakt**

| Page | Path (DE) | Purpose |
|------|-----------|---------|
| Home | `/` | Photos + offer + process + CTA |
| Portfolio | `/portfolio/` | Portraits gallery (+ events teaser) |
| Portraits | `/portraits/` | Dedicated portraits gallery |
| Preise | `/preise/` | Packages |
| Über mich | `/ueber-mich/` | Bio |
| Kontakt | `/kontakt/` | Form |
| Events | `/events/` | Secondary gallery (footer) |
| Legal | `/impressum/`, `/agb/`, `/datenschutz/` | Legal |

EN/ES use short paths under `/en/` and `/es/` (e.g. `/en/pricing/`, `/es/precios/`).

### Projects

```text
src/content/projects/
├── portraits/     # main portfolio (featured)
│   ├── project.md
│   └── images/
└── events/        # secondary
    ├── project.md
    └── images/
```

---

## Installation

```bash
npm install
```

Requires Node.js 22+.

## Development

```bash
npm run generate:contact   # once, or automatically via prebuild
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:4321). Default language is German at `/`.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

---

## Adding a project

1. Create a folder under `src/content/projects/`:

```text
src/content/projects/new-project/
├── project.md
└── images/
    ├── 01.jpg
    └── 02.jpg
```

2. Minimal `project.md`:

```yaml
---
title:
  de: Neues Projekt
  en: New project
  es: Nuevo proyecto
description:
  de: Kurze Beschreibung
  en: Short description
  es: Descripción breve
category: portraits   # portraits | personal-branding | teams | editorial | other
featured: false
draft: false
layout: editorial     # editorial | grid | masonry | hero-grid | full-width
---
```

3. Commit and push. Dedicated gallery URLs exist for `portraits` and `events`; other slugs fall back under `/portfolio/{slug}/` once a page is added.

| Project slug | DE | EN | ES |
|--------------|----|----|----|
| `portraits` | `/portraits/` | `/en/portraits/` | `/es/retratos/` |
| `events` | `/events/` | `/en/events/` | `/es/eventos/` |

Portfolio index: `/portfolio/` (and `/en/portfolio/`, `/es/portfolio/`).

---

## Languages

| Language | Path prefix |
|----------|-------------|
| German (default, Swiss Standard German) | `/` |
| English | `/en/` |
| Spanish (European) | `/es/` |

**Day-to-day copy** (edit without TypeScript): `src/content/editable/` — see that folder’s README.

Legal: `src/content/legal/`  
Routes: `src/lib/routes.ts`

hreflang, canonical URLs, Open Graph locales and the sitemap are generated at build time.

---

## Contact & business data

Edit `src/data/contact.json` (owner, address, CHE, email, phone, VAT note).

Email and phone are **not** embedded in HTML. The build writes an obfuscated `public/contact.json` (Base64) loaded only in the browser. `robots.txt` disallows that file.

Contact form: Formspree (`src/lib/site.ts` → `formspree`).

---

## Deployment (GitHub Pages)

Push to `main` → `.github/workflows/deploy.yml`:

1. Install dependencies  
2. Generate `contact.json`  
3. Build Astro  
4. Upload `dist/`  
5. Deploy to GitHub Pages  

### Domain

Production domain: **https://javiapariciofoto.ch**

- `public/CNAME` contains `javiapariciofoto.ch`
- Astro `site` is set to that origin (root domain, not a project subpath)

### Cloudflare + GitHub Pages

Do **not** move the domain off Cloudflare.

Intended setup:

```text
Cloudflare DNS
      ↓
GitHub Pages
      ↓
Astro static site
```

Typical DNS:

- Apex / www → GitHub Pages (A / CNAME records as documented by GitHub)
- Proxy via Cloudflare is fine; no Workers required

In the GitHub repo: **Settings → Pages → Custom domain** = `javiapariciofoto.ch`.

---

## Project layout

```text
src/
  content/editable/     # JSON + Markdown texts (edit here)
  content/projects/     # folders = galleries
  content/pages/        # thin loaders (do not edit for copy)
  content/legal/        # Impressum, AGB, Datenschutz
  components/           # Gallery, layout chrome, page templates
  layouts/BaseLayout.astro
  lib/                  # i18n, routes, image discovery, SEO helpers
  pages/                # DE routes
  pages/en/             # English
  pages/es/             # Spanish
  styles/global.css
  data/contact.json
public/                 # CNAME, robots, favicons, contact.json (generated)
.github/workflows/      # Pages deploy
```

### Gallery architecture

`src/lib/images.ts` discovers files with `import.meta.glob` under each project’s `images/` folder, sorts them in reverse natural order, and builds responsive WebP derivatives via Astro. Source files stay untouched in the repo; optimized variants are build output only.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build (`prebuild` generates contact.json) |
| `npm run preview` | Preview `dist/` |
| `npm run generate:contact` | Write obfuscated `public/contact.json` |
