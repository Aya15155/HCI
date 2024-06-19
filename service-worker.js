


import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';


const imageRoute = new Route(({ request }) => {
  return request.destination === 'image'
}, new StaleWhileRevalidate({
  cacheName: 'images'
}));

const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script';
}, new CacheFirst({
  cacheName: 'scripts'
}));


const stylesRoute = new Route(({ request }) => {
  return request.destination === 'style';
}, new CacheFirst({
  cacheName: 'styles'
}));


registerRoute(imageRoute);
registerRoute(scriptsRoute);
registerRoute(stylesRoute);


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hci-cache').then(cache => {
      return cache.addAll([
        '/',
        '/HTML/welcomepage.html',
        '/CSS/login.css',
        '/CSS/login.html',
        '/JAVA/Dashboard_Librarian.js',
        '/Media/logo.png',
        "/Media/logo-192.png",
        "/Media/logo-144.png"
        
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
