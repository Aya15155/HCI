// service-worker.js

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hci-cache').then(cache => {
      return cache.addAll([
        '/',
        '/HTML/welcomepage.html',
        '/CSS/login.css',
        '/JAVA/Dashboard_Librarian.js',
        '/Media/logo.png'
        // Add other resources to cache as needed
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

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion(); // Implement this function to show your install button

  installButton.addEventListener('click', (e) => {
    // Hide the install promotion
    hideInstallPromotion(); // Implement this function to hide your install button
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
});
