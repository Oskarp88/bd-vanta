import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { siteConfig } from './src/data/siteConfig.js';

// Canonical y Open Graph se completan solo cuando exista una URL real.
function productionMetadata() {
  return {
    name: 'production-metadata',
    transformIndexHtml(html) {
      if (!siteConfig.productionUrl) {
        if (siteConfig.socialImagePath) throw new Error('Configura productionUrl antes de socialImagePath.');
        return html;
      }

      const url = new URL(siteConfig.productionUrl);
      if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
        throw new Error('productionUrl debe ser una URL HTTPS pública de raíz, sin credenciales, query ni fragmento.');
      }
      const canonical = url.href;
      const metadata = [
        `<link rel="canonical" href="${canonical}" />`,
        `<meta property="og:url" content="${canonical}" />`,
      ];

      if (siteConfig.socialImagePath) {
        const imagePath = siteConfig.socialImagePath;
        if (!/^\/[a-zA-Z0-9/_-]+\.(jpg|jpeg|webp|png)$/i.test(imagePath) || !existsSync(resolve('public', imagePath.slice(1)))) {
          throw new Error('socialImagePath debe apuntar a una imagen JPG, PNG o WebP existente en public/.');
        }
        const imageUrl = new URL(imagePath, canonical).href;
        html = html.replaceAll('/social-preview.svg', imageUrl);
      }

      return html.replace('</head>', `    ${metadata.join('\n    ')}\n  </head>`);
    },
  };
}

export default defineConfig({ plugins: [react(), productionMetadata()] });
