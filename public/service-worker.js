const CACHE_NAME = "afc-ali-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/src/main.jsx",
  "/src/App.jsx",
  "/logo1.png",
  "/chef.png",
  "/food.jpeg",
  "/landing-min.png",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

// Install service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate service worker and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - cache first, then network
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // For HTML documents, use network-first strategy
  if (request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((response) => {
            return response || caches.match("/index.html");
          });
        })
    );
  } else {
    // For other resources, use cache-first strategy
    event.respondWith(
      caches.match(request).then((response) => {
        return (
          response ||
          fetch(request)
            .then((response) => {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
              return response;
            })
            .catch(() => {
              // Return a fallback response if offline
              return new Response("Offline - resource not available", {
                status: 503,
                statusText: "Service Unavailable",
                headers: new Headers({
                  "Content-Type": "text/plain",
                }),
              });
            })
        );
      })
    );
  }
});
