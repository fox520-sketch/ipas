const CACHE_NAME = "ipas-quiz-v2.4";
const ROOT = self.registration.scope;
const INDEX_URL = new URL("index.html", ROOT).href;
const PAST_FIGURES = [
  "assets/past-figures/past-114-2-s2-03.webp",
  "assets/past-figures/past-114-2-s2-22.webp",
  "assets/past-figures/past-114-2-s2-23.webp",
  "assets/past-figures/past-114-2-s2-40.webp",
  "assets/past-figures/past-114-2-s2-41.webp",
  "assets/past-figures/past-114-2-s2-42.webp",
  "assets/past-figures/past-114-2-s2-48.webp",
  "assets/past-figures/past-114-2-s2-49.webp",
  "assets/past-figures/past-114-2-s2-50.webp",
  "assets/past-figures/past-115-1-s1-19.webp",
  "assets/past-figures/past-115-1-s2-02.webp",
  "assets/past-figures/past-115-1-s2-08.webp",
  "assets/past-figures/past-115-1-s2-19.webp",
  "assets/past-figures/past-115-1-s2-23.webp",
  "assets/past-figures/past-115-1-s2-28.webp",
  "assets/past-figures/past-115-1-s2-29.webp",
  "assets/past-figures/past-115-1-s2-39.webp",
  "assets/past-figures/past-115-1-s2-40.webp",
  "assets/past-figures/past-115-1-s2-43.webp",
  "assets/past-figures/past-115-1-s2-49.webp",
  "assets/past-figures/past-115-1-s2-50.webp"
];
const APP_SHELL = ["", "index.html", "styles.css", "questions.js", "questions-s1-extra.js", "questions-s2-extra.js", "past-questions.js", "app.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", ...PAST_FIGURES]
  .map(path => new URL(path, ROOT).href);

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith("ipas-quiz-") && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(INDEX_URL, copy));
          return response;
        })
        .catch(() => caches.match(INDEX_URL).then(response => response || caches.match(ROOT)))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
      return response;
    }))
  );
});
