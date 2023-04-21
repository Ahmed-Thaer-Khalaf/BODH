var cacheName = 'DtoBOH';
var filesToCache = [
  '/BODH/',
  '/BODH/index.html',
  '/BODH/css/style.css',
  '/BODH/main.js',
  '/BODH/lib/html2canvas.min.js',
  '/BODH/lib/vue.esm-browser.js',
  '/BODH/data.js',
  '/BODH/methods.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
