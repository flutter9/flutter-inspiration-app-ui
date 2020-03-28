'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/three.jpg": "f3f102e7d1831153a45bc91df09906a0",
"/assets/assets/images/two.jpg": "04545d6b38f22fb5420a94aa759d2cba",
"/assets/assets/images/one.jpg": "4b1936dcdb29339619cbd972bcb03872",
"/assets/assets/images/four.jpg": "d45b88b256cc7865b4c0548fc06aaf63",
"/assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"/assets/assets/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"/assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets/FontManifest.json": "2aee974cdd8886e305b9fbe740a93bed",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "38466261fd53a3d102d0a437dbdc3ce3",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "866e8dbac634a898ad3a8ab4731276c2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
