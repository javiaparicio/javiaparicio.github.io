# Editable site copy

Edit these files to change texts. You do **not** need to touch `.ts` / `.astro` for normal updates.

## Pages (Markdown)

| Page | Files |
|------|--------|
| **Sobre mí / About** | `pages/about.de.md` · `.en.md` · `.es.md` |
| **Contacto** (intro) | `pages/contact.de.md` · `.en.md` · `.es.md` |
| **Precios** (intro) | `pages/pricing.*.md` |
| **Gracias** | `pages/danke.*.md` |

## Structured JSON

| What | File |
|------|------|
| Nav, home, form labels, gallery | `ui.json` |
| SEO titles + descriptions + visible H1s | `meta.json` |
| Price packages + FAQ | `pricing.json` |

## Not here (on purpose)

| What | Where |
|------|--------|
| Address, phone, email, CHE | `src/data/contact.json` (business data) |
| About / contact portrait | `src/assets/contact/portrait.webp` |
| Legal (Impressum, AGB, privacy) | `src/content/legal/` |
| Photos | `src/content/projects/*/images/` |

## Languages

Every text has three values: `de`, `en`, `es`. Change all three when you edit.

## Markdown tips

- Use `## Heading` for section titles
- Use `- item` for lists
- Links: `[text]({{contact}})` or `[Eventos]({{events}})`
- Buttons: `<a href="{{contact}}" class="button">…</a>`

Tokens: `{{home}}` `{{portraits}}` `{{portfolio}}` `{{pricing}}` `{{about}}` `{{contact}}` `{{events}}` `{{privacy}}` `{{terms}}` `{{legal}}`

## After editing

```bash
git add .
git commit -m "Update copy"
git push
```

GitHub Actions rebuilds the site.
