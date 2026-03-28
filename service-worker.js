const CACHE = 'njtransit-v1';
const ASSETS = ['./', './index.html', './styles.css', './images_1/nj2.png'];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
);
self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
