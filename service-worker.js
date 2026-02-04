const CACHE_NAME = "grupo-intermedio-v2";

const STATIC_ASSETS = [
  "index.html",
  "menu.html",
  "juegos.html",
  "palabra.html",
  "novedades.html",
  "cronograma.html",
  "crucigramas.html",
  "verdadero-falso.html",
  "opcion-multiple.html",
  "css/styles.css",
  "js/crucigramas.js",
  "js/verdadero-falso.js",
  "js/opcion-multiple.js"
];

/* ===============================
   INSTALL
================================ */
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

/* ===============================
   ACTIVATE
================================ */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ===============================
   FETCH
================================ */
self.addEventListener("fetch", event => {
  const request = event.request;

  // 👉 NAVEGACIÓN HTML: SIEMPRE RED
  if (request.mode === "navigate") {
    event.respondWith(fetch(request));
    return;
  }

  // 👉 ESTÁTICOS: CACHE CON FALLBACK
  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request);
    })
  );
});
