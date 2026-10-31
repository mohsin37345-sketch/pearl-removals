import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pearlremovals.co.uk',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        if (
          path.includes('/404') ||
          path.includes('/thank-you') ||
          path.includes('/llms.txt') ||
          path.includes('draft')
        ) {
          return false;
        }
        return true;
      },
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          path.startsWith('/removals/') && path.split('/').filter(Boolean).length === 2 ||
          path === '/areas/north-west-london/' ||
          ['/areas/cricklewood/', '/areas/kilburn/', '/areas/hendon/', '/areas/mill-hill/', '/areas/hampstead/', '/areas/maida-vale/', '/areas/paddington/', '/areas/primrose-hill/', '/areas/brent-cross/'].includes(path)
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/areas/') && path.split('/').filter(Boolean).length === 2) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/removals/') && path.split('/').filter(Boolean).length === 3) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/areas/') && path.split('/').filter(Boolean).length === 3) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        'theme': path.resolve(__dirname, './theme')
      }
    }
  }
});
