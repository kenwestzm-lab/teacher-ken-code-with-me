const C='tkcm-v2-school-photos';
const F=['./','./index.html','./manifest.json',
'./images/1000480462.jpg','./images/1000480465.jpg','./images/1000480464.jpg',
'./images/1000475327.png','./images/1000475328.png','./images/1000475325.png',
'./images/1000475324.png','./images/1000475326.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(a=>Promise.all(a.filter(k=>k!==C).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html')))));
