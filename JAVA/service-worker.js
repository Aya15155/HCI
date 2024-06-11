const cacheName = 'library-dashboard-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/admin_menu.css',
  '/admin_menu.js',
  '/manifest.json',
  '/Media/logo.png',
  '/Media/profile.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.add
    }))})