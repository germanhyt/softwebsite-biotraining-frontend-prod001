import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CaZpPhi9.mjs';
import { manifest } from './manifest_-BhTbjvi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send-conversemos.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/api/send-enterprise.astro.mjs');
const _page4 = () => import('./pages/api/send-student.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send-conversemos.ts", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/api/send-enterprise.ts", _page3],
    ["src/pages/api/send-student.ts", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7615a6bd-8a8d-4bdf-89ea-2f3fcdcb9d3f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
