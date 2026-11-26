const CACHE_NAME = 'sti-de-a-z-v48.0';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css?v=48.0',
  '/notebooks.css?v=48.0',
  '/store.js?v=48.0',
  '/data.js?v=48.0',
  '/data/curriculum.js?v=48.0',
  '/data/documents.js?v=48.0',
  '/data/exercises.js?v=48.0',
  '/data/methods.js?v=48.0',
  '/data/errors.js?v=48.0',
  '/data/tables/rappels.js?v=48.0',
  '/data/tables/fichiers.js?v=48.0',
  '/data/tables/recursivite.js?v=48.0',
  '/data/tables/bases.js?v=48.0',
  '/data/tables/arithmetique.js?v=48.0',
  '/data/tables/approximation.js?v=48.0',
  '/data/tables/tableaux.js?v=48.0',
  '/data/tables/matrices.js?v=48.0',
  '/data/tables/suites.js?v=48.0',
  '/data/tables.js?v=48.0',
  '/data/quiz/rappels.js?v=48.0',
  '/data/quiz/fichiers.js?v=48.0',
  '/data/quiz/recursivite.js?v=48.0',
  '/data/quiz/bases.js?v=48.0',
  '/data/quiz/arithmetique.js?v=48.0',
  '/data/quiz/approximation.js?v=48.0',
  '/data/quiz/tableaux.js?v=48.0',
  '/data/quiz/matrices.js?v=48.0',
  '/data/quiz/suites.js?v=48.0',
  '/data/quiz.js?v=48.0',
  '/data/notebooks_data.js?v=48.0',
  '/notebooks_store.js?v=48.0',
  '/notebooks_engine.js?v=48.0',
  '/app.js?v=48.0',
  '/css_engine.js?v=48.0',
  '/algo_pratique_engine.js?v=48.0',
  '/pomodoro_engine.js?v=48.0',
  '/favicon.svg',
  '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('SW pre-cache partial error:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) {
            return caches.delete(k);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  // Stratégie Network-First sans cache HTTP pour HTML, JS et CSS : garantit la réception immédiate des dernières mises à jour
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname === '/') {
    e.respondWith(
      fetch(new Request(e.request, { cache: 'no-cache' }))
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-First pour les autres fichiers (favicons, images, sons)
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }
        return networkResponse;
      });
    })
  );
});

