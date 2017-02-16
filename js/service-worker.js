self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('airhorner').then(function (cache) {
      return cache.addAll([
        '/',
        'index.html',
        '/js/jquery-2.1.1.min.js',
        '/js/materialize.min.js',
        '/js/app.js',
        '/css/materialize.min.css',
        '/images/sample-1.jpg'
      ]);
    })
  );
});