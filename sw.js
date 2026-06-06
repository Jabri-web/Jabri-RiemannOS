const CACHE_NAME = 'jabri-riemann-v2';
const FILES = [
  './index.html',
  './manifest.json',
  './History-pdf.html',
  './Jabri_photo.png',
  './pdfs/Hist3.pdf',
  './pdfs/Hist4.pdf',
  './pdfs/YemenGeography.pdf'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});