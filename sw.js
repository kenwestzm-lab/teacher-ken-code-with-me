const C='tkcm-v3-landscape-music-photos';
const F=['./','./index.html','./manifest.json',
'./images/1000480462.jpg','./images/1000480464.jpg','./images/1000480465.jpg',
'./images/1000475324.png','./images/1000475325.png','./images/1000475326.png',
'./images/1000475327.png','./images/1000475328.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(a=>Promise.all(a.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&new URL(e.request.url).origin===location.origin){const copy=res.clone();caches.open(C).then(c=>c.put(e.request,copy))}return res}).catch(()=>caches.match('./index.html'))))});
