const cacheName = 'library-dashboard-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/profile-pic.png',
    '/manifest.json',
    // Add other assets to cache
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
