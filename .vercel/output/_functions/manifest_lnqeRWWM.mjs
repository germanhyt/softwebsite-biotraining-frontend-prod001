import { o as decodeKey } from './chunks/astro/server_r59jpfp4.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BVLSDJOq.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/","cacheDir":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/node_modules/.astro/","outDir":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/dist/","srcDir":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/","publicDir":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/public/","buildClientDir":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/dist/client/","buildServerDir":"file:///C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-conversemos","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-conversemos\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-conversemos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-conversemos.ts","pathname":"/api/send-conversemos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-enterprise","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-enterprise\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-enterprise","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-enterprise.ts","pathname":"/api/send-enterprise","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-student","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-student\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-student","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-student.ts","pathname":"/api/send-student","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.i7ig68AX.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.biotraining.pe","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/send-conversemos@_@ts":"pages/api/send-conversemos.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/api/send-enterprise@_@ts":"pages/api/send-enterprise.astro.mjs","\u0000@astro-page:src/pages/api/send-student@_@ts":"pages/api/send-student.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_lnqeRWWM.mjs","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CwpCNvDH.mjs","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Header":"_astro/Header.DGb3G_2v.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/SocialNetworks":"_astro/SocialNetworks.CnZ9ewsk.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Hero":"_astro/Hero.Zcx8rKJN.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/EstudianteProfesional":"_astro/EstudianteProfesional.uQWVaPl5.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Benefits":"_astro/Benefits.COmLL09S.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/MetodologiaExito":"_astro/MetodologiaExito.BMz1POJ8.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/EquiposUltimaGeneracion":"_astro/EquiposUltimaGeneracion.CWxU9f7B.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Courses":"_astro/Courses.DiNi5gDu.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/IncentivandoAprendizaje":"_astro/IncentivandoAprendizaje.Dlqo4cNz.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Instructors":"_astro/Instructors.C_N2DdhU.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Partners":"_astro/Partners.HpoRrCVq.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Testimonials":"_astro/Testimonials.Dw46tvjF.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/CTAEmpresas":"_astro/CTAEmpresas.CwYaFEor.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Conversemos":"_astro/Conversemos.BjfKKc8J.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/FAQ":"_astro/FAQ.Dlue4Bk8.js","C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Footer":"_astro/Footer.46E0X2Nj.js","@astrojs/react/client.js":"_astro/client.KV81xjCS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/section-equipos-ultima-generacion.SMT0jM9V.webp","/_astro/hero-banner_base.Bp0lFgjo.webp","/_astro/hero-banner_3.CZV2ELjm.webp","/_astro/hero-banner_2.DVY43aEl.webp","/_astro/hero-banner_1.fynd0H0E.webp","/_astro/hero-banner_4.ysMG1S5h.webp","/_astro/hero-banner_5.Dxz3jAN_.webp","/_astro/section-capacitacion_certificate.CXlaStXt.webp","/_astro/section-capacitacion_docentes.BLKHFL-J.webp","/_astro/section-capacitacion_casos-reales.DLhhwLG9.webp","/_astro/section-capacitacion_horarios-flexibles.Ben9VHWy.webp","/_astro/logo.DZyTiX-c.webp","/_astro/section-nuestros-aliados_biotecnomico-color.BDYbsSTD.webp","/_astro/section-nuestros-aliados_biotecnomico-gris.B9zpdmkP.webp","/_astro/section-nuestros-aliados_cipvida-color.D9ginikD.webp","/_astro/section-nuestros-aliados_cipvida-gris.Dr8JGEnf.webp","/_astro/section-nuestros-aliados_consejo-regional-color.kCi-Nn17.webp","/_astro/section-nuestros-aliados_consejo-regional-gris.mU9ragh0.webp","/_astro/section-capacita-equipo_cta-mobile.B06_wq8x.webp","/_astro/section-capacita-equipo_cta.9DzC8Ung.webp","/_astro/section-metodologia-garantiza-exito.9JalK6ZX.webp","/_astro/section-estudiante-o-profesional.DBUjJYou.webp","/_astro/section-incentivando-aprendizaje.QkpRmOxd.webp","/_astro/section-curso_diseno-optimizacion.ZDM9xBI8.webp","/_astro/section-curso_qpcr.BAEbrzKV.webp","/_astro/section-curso_diagnostico-molecular.BDkRWyxw.webp","/_astro/section-curso_exploracion-analisis.DggiNvvv.webp","/_astro/section-aprende-expertos_dra-maria-machado.YwsnGfQT.png","/_astro/icon-graduate.B1YqC36M.webp","/_astro/icon-isntructor.BnH2KL_6.webp","/_astro/work-sans-vietnamese-500-normal.Czn2Xkog.woff2","/_astro/work-sans-latin-400-normal.jUejSri3.woff2","/_astro/work-sans-latin-ext-400-normal.zfQnhXzv.woff2","/_astro/work-sans-vietnamese-400-normal.BxGuknnG.woff2","/_astro/work-sans-latin-ext-500-normal.CAKEIVkc.woff2","/_astro/work-sans-latin-500-normal.BKGnScDy.woff2","/_astro/work-sans-vietnamese-600-normal.DizFELYt.woff2","/_astro/work-sans-latin-ext-600-normal.DNiHHggD.woff2","/_astro/work-sans-latin-600-normal.DB-2V89X.woff2","/_astro/work-sans-vietnamese-700-normal.CqjC4WOy.woff2","/_astro/work-sans-latin-700-normal.CEeo_t6l.woff2","/_astro/work-sans-latin-ext-700-normal.Bc0iTajH.woff2","/_astro/manrope-vietnamese-400-normal.DHb3EETF.woff2","/_astro/manrope-cyrillic-400-normal.BMzJvInZ.woff2","/_astro/manrope-greek-400-normal.CM4qok81.woff2","/_astro/manrope-latin-ext-400-normal.CMDvPJRp.woff2","/_astro/manrope-cyrillic-500-normal.B1OEZity.woff2","/_astro/manrope-greek-500-normal.GeMIHyWm.woff2","/_astro/manrope-latin-400-normal.PaqtzbVb.woff2","/_astro/manrope-latin-ext-500-normal.dm74KBQw.woff2","/_astro/manrope-vietnamese-500-normal.DCXiE_xi.woff2","/_astro/manrope-cyrillic-600-normal.DvRl3Mj-.woff2","/_astro/manrope-latin-500-normal.BYYD-dBL.woff2","/_astro/manrope-greek-600-normal.BoRV6lzK.woff2","/_astro/manrope-vietnamese-600-normal.C1J5PCl_.woff2","/_astro/manrope-latin-ext-600-normal._gBojHdJ.woff2","/_astro/manrope-latin-600-normal.4f0koTD-.woff2","/_astro/manrope-greek-700-normal.CHUG9PD8.woff2","/_astro/manrope-cyrillic-700-normal.Dw_fZAg2.woff2","/_astro/manrope-vietnamese-700-normal.CUqMx5-1.woff2","/_astro/manrope-latin-ext-700-normal.DYOwVNan.woff2","/_astro/manrope-latin-700-normal.BZp_XxE4.woff2","/_astro/work-sans-vietnamese-400-normal.DFZk_KN_.woff","/_astro/work-sans-vietnamese-500-normal.90nhZfxs.woff","/_astro/work-sans-latin-ext-400-normal.j7TZlk-s.woff","/_astro/work-sans-latin-400-normal.DE1_0GuN.woff","/_astro/work-sans-vietnamese-600-normal.ue5fzGW6.woff","/_astro/work-sans-latin-500-normal.BmdXWF6_.woff","/_astro/work-sans-latin-ext-500-normal.CW9ss9Cz.woff","/_astro/work-sans-vietnamese-700-normal.BYAoORCv.woff","/_astro/work-sans-latin-600-normal.Cg-NlmS7.woff","/_astro/work-sans-latin-ext-700-normal.BP8nCPzd.woff","/_astro/work-sans-latin-ext-600-normal.B1NFRnx8.woff","/_astro/work-sans-latin-700-normal.mDs79oer.woff","/_astro/manrope-vietnamese-400-normal.D7E_mLGF.woff","/_astro/manrope-greek-400-normal.DuX9RsAR.woff","/_astro/manrope-cyrillic-400-normal.Dvx59UGC.woff","/_astro/manrope-cyrillic-500-normal.CNwnNrRC.woff","/_astro/manrope-latin-ext-400-normal.C-X6QNXX.woff","/_astro/manrope-greek-500-normal.DyxYGEtJ.woff","/_astro/manrope-latin-400-normal.8tf8FM3T.woff","/_astro/manrope-vietnamese-500-normal.DaZ8i3XM.woff","/_astro/manrope-latin-ext-500-normal.EtoS1VaI.woff","/_astro/manrope-cyrillic-600-normal.It4mZcQk.woff","/_astro/manrope-greek-600-normal.CF2i9ZRY.woff","/_astro/manrope-vietnamese-600-normal.lA7a_7Ok.woff","/_astro/manrope-latin-500-normal.DMZssgOp.woff","/_astro/manrope-latin-ext-600-normal.u5Pl7hTU.woff","/_astro/manrope-greek-700-normal.DyfsrCpP.woff","/_astro/manrope-latin-600-normal.BqgrALkZ.woff","/_astro/manrope-cyrillic-700-normal.7JNVKxyl.woff","/_astro/manrope-vietnamese-700-normal.pt65Fn2Z.woff","/_astro/manrope-latin-ext-700-normal.eVCcYqtJ.woff","/_astro/manrope-latin-700-normal.DGRFkw-m.woff","/_astro/index.i7ig68AX.css","/biotecnologia.mp4","/favicon.svg","/robots.txt","/images/README.md","/_astro/autoplay.xVL_U9QE.js","/_astro/Benefits.COmLL09S.js","/_astro/Button.C2St8aKc.js","/_astro/client.KV81xjCS.js","/_astro/Conversemos.BjfKKc8J.js","/_astro/Courses.DiNi5gDu.js","/_astro/CTAEmpresas.CwYaFEor.js","/_astro/EquiposUltimaGeneracion.CWxU9f7B.js","/_astro/EstudianteProfesional.uQWVaPl5.js","/_astro/FAQ.Dlue4Bk8.js","/_astro/Footer.46E0X2Nj.js","/_astro/Header.DGb3G_2v.js","/_astro/Hero.Zcx8rKJN.js","/_astro/IncentivandoAprendizaje.Dlqo4cNz.js","/_astro/index.7in8nkh5.js","/_astro/index.BToYrrmf.css","/_astro/index.CFClyy1j.js","/_astro/index.FwQU_blz.js","/_astro/Instructors.C_N2DdhU.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/logo.Bc30UvG2.js","/_astro/MetodologiaExito.BMz1POJ8.js","/_astro/pagination._veNWN99.js","/_astro/Partners.HpoRrCVq.js","/_astro/proxy.C9gwWTI2.js","/_astro/SocialNetworks.CnZ9ewsk.js","/_astro/sweetalert2.esm.all.BupdWeoU.js","/_astro/Testimonials.Dw46tvjF.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"8PChJl96wXcCSU5VCy4klmHpCAdS9KV20gn7KZMo/Fo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
