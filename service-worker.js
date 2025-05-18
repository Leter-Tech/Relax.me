const CACHE_NAME = 'relax-me-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/404.html',
    '/account.html',
    '/ai-buddy.html',
    '/ambient.html',
    '/balloon-pop.html',
    '/breathing.html',
    '/emergency.html',
    '/journal.html',
    '/favicon.png',
    '/GlacialIndifference-Regular.otf',
    '/assets/background1.png',
    '/assets/background2.png',
    '/assets/background3.png',
    '/assets/background4.png',
    '/assets/background5.png',
    '/assets/background6.png',
    '/assets/background7.png',
    '/assets/background8.png',
    '/assets/background9.png',
    '/assets/background10.png',
    '/assets/background11.png',
    '/assets/background12.png',
    '/assets/tick.mp3',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});