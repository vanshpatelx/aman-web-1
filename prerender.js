import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();

const { render } = await import('./dist/server/entry-server.js')

// Define actual routes to prerender (based on App.tsx routes)
const routesToPrerender = [
  '/',
  '/about',
  '/Accessctapage',
  '/BlogPage',
  '/EbooksPage',
  '/IndustryNewsPage',
  '/PodcastsPage',
  '/WhitePapersPage',
  '/Brokering',
  '/Consignment',
  '/Disposition',
  '/Inspection',
  '/Logistics'
];

; (async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }

  // Unregister happy-dom to allow process to exit
  GlobalRegistrator.unregister();
})()

