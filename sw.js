// Variables que gestionan el caché
const CACHE_STATIC_NAME = 'static-v1';

self.addEventListener('install', e => {
    const cacheShell = caches.open(CACHE_STATIC_NAME)
    .then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/README.md',
            '/js/app.js',
            '/js/base.js',
            '/style/base.css',
            '/style/bg.png',
            'https://cdn.jsdelivr.net/npm/pouchdb@7.3.0/dist/pouchdb.min.js'
        ])
    })
    .catch(console.log);

    e.waitUntil(cacheShell);
});

self.addEventListener('fetch', e => {
    // estrategia caché only
    e.respondWith(
        caches.match(e.request)
    )
});