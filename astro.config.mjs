// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://javiapariciofoto.ch';

/**
 * With trailingSlash: 'always', Astro's own 404 (not the site 404) is shown
 * for slash-less URLs in `astro dev`. Redirect first so /foo → /foo/.
 * Options: 'always' | 'never' | 'ignore' (ignore accepts both; never drops the slash).
 */
function redirectMissingTrailingSlash() {
  return {
    name: 'redirect-missing-trailing-slash',
    enforce: 'post',
    configureServer(server) {
      return () => {
        server.middlewares.stack.unshift({
          route: '',
          handle(req, res, next) {
            if (req.method !== 'GET' && req.method !== 'HEAD') return next();
            const raw = req.url ?? '/';
            const q = raw.indexOf('?');
            const pathname = q === -1 ? raw : raw.slice(0, q);
            const search = q === -1 ? '' : raw.slice(q);
            const last = pathname.split('/').pop() ?? '';
            // Do not touch Vite/Astro internals (e.g. /@vite/client → client.mjs/)
            if (
              pathname.startsWith('/@') ||
              pathname.startsWith('/__') ||
              pathname.startsWith('/node_modules') ||
              pathname.startsWith('/src/') ||
              pathname.startsWith('/_image')
            ) {
              return next();
            }
            if (
              pathname.length > 1 &&
              !pathname.endsWith('/') &&
              !last.includes('.')
            ) {
              res.statusCode = 308;
              res.setHeader('Location', `${pathname}/${search}`);
              res.end();
              return;
            }
            next();
          },
        });
      };
    },
  };
}

/** `Header.astro?astro&type=script…` → `header`. The content hash stays for cache-busting. */
function assetChunkName(name) {
  const stem = name
    .replace(/\.astro.*$/i, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  return stem || 'app';
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/scanme/': '/linktree/',
  },
  build: {
    // Avoid FOUC: don't defer page/layout CSS to a late external file
    inlineStylesheets: 'always',
    // Compiled images and scripts. Not `_astro`, and not `assets` (that folder is already in public/).
    assets: 'static',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-CH',
          en: 'en-CH',
          es: 'es',
        },
      },
      filter: (page) =>
        !page.includes('/danke') &&
        !page.includes('/thank-you') &&
        !page.includes('/gracias') &&
        !page.includes('/linktree') &&
        !page.includes('/scanme') &&
        !page.includes('/404'),
    }),
  ],
  image: {
    // Avoid responsive image attrs fighting our CSS and causing layout pops
    layout: 'none',
  },
  vite: {
    environments: {
      client: {
        build: {
          rolldownOptions: {
            output: {
              entryFileNames: (chunk) => `static/${assetChunkName(chunk.name)}.[hash].js`,
              chunkFileNames: (chunk) => `static/${assetChunkName(chunk.name)}.[hash].js`,
            },
          },
        },
      },
    },
    build: {
      // Astro inlines script chunks under 4 kB. Keep every JS file external so
      // script-src can omit 'unsafe-inline'. CSS inlining is unchanged.
      assetsInlineLimit(filePath) {
        if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) return false;
      },
    },
    plugins: [redirectMissingTrailingSlash()],
    server: {
      watch: {
        ignored: ['**/.git/**'],
      },
    },
  },
});
