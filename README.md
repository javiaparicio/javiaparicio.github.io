# javiaparicio.github.io

Static site for [javiapariciofoto.ch](https://javiapariciofoto.ch), built with Jekyll and deployed via GitHub Actions. Replaces the previous WordPress site.

## Local development

```bash
bundle install
ruby -rjson -rbase64 -e 'c=JSON.parse(File.read("_data/contact.json")); File.write("contact.json", JSON.generate({"e"=>Base64.strict_encode64(c["email"]),"p"=>Base64.strict_encode64(c["phone"])})+"\n")'
bundle exec jekyll serve
```

Open http://localhost:4000 (default language: **German**).

## URLs (hybrid)

German uses the original WordPress slugs; English and Spanish use shorter localized paths under `/en/` and `/es/`. Internal links use `{% tl namespace %}` so they stay correct per language.

| Page | DE | EN | ES |
|------|----|----|-----|
| Home | `/` | `/en/` | `/es/` |
| Services | `/portraitfotografie-dienstleistungen-in-bern/` | `/en/services/` | `/es/servicios/` |
| Clients | `/kunden-und-projekttypen-in-bern/` | `/en/clients/` | `/es/clientes/` |
| Process | `/wie-eine-portrait-session-ablaeuft/` | `/en/process/` | `/es/proceso/` |
| Pricing | `/preise-fuer-portrait-sessions-in-bern/` | `/en/pricing/` | `/es/precios/` |
| About | `/ueber-mich/` | `/en/about/` | `/es/sobre-mi/` |
| Contact | `/kontakt/` | `/en/contact/` | `/es/contacto/` |
| Portraits | `/portraits/` | `/en/portraits/` | `/es/retratos/` |
| Events | `/events/` | `/en/events/` | `/es/eventos/` |
| More work | `/weitere-arbeiten/` | `/en/more-work/` | `/es/otros-trabajos/` |

## Project layout

```
pages/              Page front matter (permalink, namespace, SEO)
pages/aliases/      Legacy URL aliases (noindex, canonical via namespace)
_i18n/{de,en,es}/   Page body copy ({% tf filename.md %})
_data/              settings.yml, galleries.yml, contact.json
_includes/          Partials (gallery, meta, footer, …)
_layouts/           default, 404, linktree, forward, sitemap
assets/             CSS, JS, images, favicons
404.html            GitHub Pages error page (repo root)
robots.txt, CNAME   Deploy / SEO (repo root)
sitemap_index.xml   Static sitemap index (repo root)
```

## SEO

- Meta titles/descriptions per page and language (front matter)
- `hreflang`, canonical URLs via `{% tl %}`, structured data (`_includes/ldjson.html`)
- Sitemaps: `sitemap_index.xml` → `/sitemap.xml`, `/en/sitemap.xml`, `/es/sitemap.xml` (Liquid layout)
- Utility pages (`danke`, `linktree`, `scanme`, `404`) use `noindex`

After deploy, submit `https://javiapariciofoto.ch/sitemap_index.xml` in Google Search Console.

## Deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages.

**DNS:** Point `javiapariciofoto.ch` to GitHub Pages and set the custom domain in the repository settings. `CNAME` contains `javiapariciofoto.ch`.

After DNS cutover, disable or remove the WordPress hosting for this domain.

## Content

- Page config: `pages/*.md`
- Page bodies: `_i18n/{de,en,es}/*.md`
- Contact details (legal/privacy/terms): edit `_data/contact.json`. Email and phone load in the browser from obfuscated `/contact.json` (not in static HTML; `robots.txt` disallows that file). JSON-LD uses city-level address only, no email/phone.
- Menus and footer: `_data/settings.yml` (namespaces + `{% tl %}`)
- Galleries: `assets/images/galleries/{page}/` — `{% include gallery.html page="clients" %}`; optional `reverse=true` for portfolio. Captions in `_data/galleries.yml`.
