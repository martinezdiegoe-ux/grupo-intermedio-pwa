self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("grupo-intermedio-v1").then(cache =>
      cache.addAll([
        "index.html",
        "menu.html",
        "juegos.html",
        "palabra.html",
        "novedades.html",
        "cronograma.html",
        "crucigramas.html",
        "verdadero-falso.html",
        "opcion-multiple.html",
        "css/styles.css"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
