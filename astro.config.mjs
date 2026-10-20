import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function suppressTrailingInjectedScripts() {
  return {
    name: 'suppress-trailing-injected-scripts',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const root = fileURLToPath(dir);
        const walk = (d) => {
          for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (entry.name.endsWith('.html')) {
              const html = fs.readFileSync(full, 'utf8');
              if (!html.endsWith('<!--')) {
                fs.writeFileSync(full, html + '<!--');
              }
            }
          }
        };
        walk(root);
      },
    },
  };
}

export default defineConfig({
  site: 'https://www.eikovisual.com',
  trailingSlash: 'ignore',
  integrations: [sitemap(), suppressTrailingInjectedScripts()],
  build: {
    inlineStylesheets: 'always',
  },
});
