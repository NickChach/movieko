const staticCache = "movieko-v.1.2";

const staticFiles = [
    "./",
    "./index.html",
    "./index.css",
    "./apikey.js",
    "./scripts/utils.js",
    "./scripts/compare-movies.js",
    "./scripts/autocomplete.js",
    "./scripts/index.js",
    "./images/favicon.ico",
    "https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Press+Start+2P&display=swap"
];

self.addEventListener("install", async () => {
    const cache = await caches.open(staticCache);
    cache.addAll(staticFiles);
});

self.addEventListener("activate", event => {
    event.waitUntil(caches.keys().then(keyList => {
        return Promise.all(keyList.map(key => {
            if (key !== staticCache) {
                return caches.delete(key);
            }
        }));
    }));
    return self.clients.claim();
});

self.addEventListener("fetch", event => {
    const request = event.request;
    const url = new URL(request.url);

    if (url.origin == location.origin) {
        event.respondWith(cacheFirst(request));
    }
});

async function cacheFirst(request) {
    const response = await caches.match(request);
    return response || fetch(request);
}