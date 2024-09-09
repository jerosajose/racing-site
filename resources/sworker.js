const staticCache = "racingsiteapp";
/* 
those are the saved files in caché when the PWA is installed
try putting as less files as possible to make the PWA lighter
*/
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/palette.css",
  "/css/mobile.css",
  "/scripts/ms-fluent.js",
  "/scripts/settings.js",
  "/assets/webapp/",
  "/assets/",
  "/resources/404.html",
  "/codepen/",
  "/fonts/"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCache).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});

self.addEventListener('fetch', function(event) {
    event
    .respondWith(
        cache.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }
    )
    .catch(function(){return caches.match('/resources/404.html');}));
});