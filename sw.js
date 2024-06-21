

self.addEventListener('install', event => {
  
  event.waitUntil(
    caches.open("hci-cache").then(cache => {
      return cache.addAll([
        "/",
        "/HTML/welcomepage.html",
        "/CSS/login.css",
        "/HTML/login.html",
        "/HTML/Dashboard_Librarian.html",
        "HTML/admin_menu.html"
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




