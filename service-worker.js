!function(){"use strict";const e=1610569245757,t=`cache${e}`,s=["/client/client.68c56987.js","/client/inject_styles.5607aec6.js","/client/index.0a67998e.js","/client/infos-pratiques.16f6b985.js","/client/bibliotheque.9ee59964.js","/client/jeune-public.b3cfea11.js","/client/calendrier.8653a194.js","/client/exposition.34352442.js","/client/magazine.2311b2c9.js","/client/cinema.7c9ddbf3.js","/client/musee.b0fafbcf.js"].concat(["/service-worker-index.html","/css/custom/1_2.css","/fonts/Quicksand-Bold.woff","/fonts/Quicksand-Bold.woff2","/fonts/Quicksand-Light.woff","/fonts/Quicksand-Light.woff2","/fonts/Quicksand-Medium.woff","/fonts/Quicksand-Medium.woff2","/fonts/Quicksand-Regular.woff","/fonts/Quicksand-Regular.woff2","/fonts/Quicksand-SemiBold.woff","/fonts/Quicksand-SemiBold.woff2","/fonts.css","/global.css"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),c=s.protocol.startsWith("http"),i=s.hostname===self.location.hostname&&s.port!==self.location.port,a=s.host===self.location.host&&n.has(s.pathname),o="only-if-cached"===t.request.cache&&!a;!c||i||o||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
