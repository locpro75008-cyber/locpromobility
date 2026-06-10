import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Q40l2dX1.mjs';
import { manifest } from './manifest_I7cPiFGD.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/catalogue/_slug_.astro.mjs');
const _page6 = () => import('./pages/catalogue.astro.mjs');
const _page7 = () => import('./pages/cgu.astro.mjs');
const _page8 = () => import('./pages/comment-ca-marche.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/devis.astro.mjs');
const _page11 = () => import('./pages/entreprises.astro.mjs');
const _page12 = () => import('./pages/faq.astro.mjs');
const _page13 = () => import('./pages/location/_ville_.astro.mjs');
const _page14 = () => import('./pages/location-velo-electrique-paris.astro.mjs');
const _page15 = () => import('./pages/location-velo-electrique-vs-velib.astro.mjs');
const _page16 = () => import('./pages/mentions-legales.astro.mjs');
const _page17 = () => import('./pages/politique-confidentialite.astro.mjs');
const _page18 = () => import('./pages/reserver.astro.mjs');
const _page19 = () => import('./pages/sitemap.xml.astro.mjs');
const _page20 = () => import('./pages/tarifs.astro.mjs');
const _page21 = () => import('./pages/zones.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/catalogue/[slug].astro", _page5],
    ["src/pages/catalogue/index.astro", _page6],
    ["src/pages/cgu.astro", _page7],
    ["src/pages/comment-ca-marche.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/devis.astro", _page10],
    ["src/pages/entreprises.astro", _page11],
    ["src/pages/faq.astro", _page12],
    ["src/pages/location/[ville].astro", _page13],
    ["src/pages/location-velo-electrique-paris.astro", _page14],
    ["src/pages/location-velo-electrique-vs-velib.astro", _page15],
    ["src/pages/mentions-legales.astro", _page16],
    ["src/pages/politique-confidentialite.astro", _page17],
    ["src/pages/reserver.astro", _page18],
    ["src/pages/sitemap.xml.ts", _page19],
    ["src/pages/tarifs.astro", _page20],
    ["src/pages/zones.astro", _page21],
    ["src/pages/index.astro", _page22]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "23cee9c6-0de1-42b1-99c2-fb79e453f4d8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
