# Galleries

One subfolder per page. Add `.webp` files inside the matching folder.

```
galleries/
  index/      → index_001.webp, index_002.webp, …
  services/
  clients/
  process/
  portraits/
  events/
```

| Folder | Used on |
|--------|---------|
| `index` | Home |
| `services` | Dienstleistungen |
| `clients` | Kunden |
| `process` | Ablauf |
| `portraits` | Porträt-Galerie |
| `events` | Event-Galerie |

Name files `{folder}_001.webp`, `{folder}_002.webp`, … (three-digit index) so sort order is predictable.

## Include

```liquid
{% include gallery.html page="clients" %}
{% include gallery.html page="portraits" reverse=true %}
```

- **`page`** (required) — subfolder under `galleries/`.
- **`reverse`** (optional) — highest number first (`portraits`, `events`).

## Captions

Optional per-file text in `_data/galleries.yml` (one section per folder). Rebuild or deploy after changes.
