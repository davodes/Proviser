import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.proviser.es',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [
        'https://www.proviser.es/',
        'https://www.proviser.es/nosotros',
        'https://www.proviser.es/edificacion',
        'https://www.proviser.es/rehabilitacion',
        'https://www.proviser.es/urbanizacion-y-obra-civil',
        'https://www.proviser.es/blog',
        'https://www.proviser.es/clientes'
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});