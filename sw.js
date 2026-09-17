/* Offline-Speicher für die Lernraum-App.
   Speichert nur die App-Dateien selbst. Einträge der Lernenden liegen im
   Browserspeicher des iPads und werden nie über das Netz übertragen. */
const CACHE = "lernraum-app-v1";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", ev => {
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", ev => {
  ev.waitUntil(caches.keys()
    .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

/* Sofort aus dem Speicher antworten (funktioniert offline), im Hintergrund
   die neuste Version holen. Änderungen erscheinen beim nächsten Öffnen. */
self.addEventListener("fetch", ev => {
  const url = new URL(ev.request.url);
  if (ev.request.method !== "GET" || url.origin !== self.location.origin) return;
  const netz = fetch(ev.request).then(async antwort => {
    if (antwort.ok) {
      const c = await caches.open(CACHE);
      await c.put(ev.request, antwort.clone());
    }
    return antwort;
  });
  ev.waitUntil(netz.catch(() => {}));
  ev.respondWith(caches.match(ev.request, { ignoreSearch: true }).then(alt => alt || netz));
});
