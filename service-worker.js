'use strict'

const cacheList = [
  '0.chunk.js',
  'polyfills.bundle.min.js',
  'styles.bundle.min.js',
  'vendor.bundle.min.js',
  'main.bundle.min.js',
  'assets/icon-1x.png',
  'assets/chek.png',
  'index.html',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
]
const getStartAndEndDatesPerMonth = function (date) {
  const year = date.getFullYear(),
    month = date.getMonth()

  return {
    from: new Date(year, month, 1),
    to: new Date(year, month + 1, 0)
  }
}

const separateToMonthlyRanges = function (from, to, isOriginRange = true) {
  const _getRange = (start, finish, currentYear) => {
    const array = []

    for (let i = start; i <= finish; i++) {
      let { from: f, to: t } =
        this.getStartAndEndDatesPerMonth(new Date(fromYear, i))
      if (isOriginRange) {
        if (i === start && currentYear === fromYear) f = from
        if (i === finish && currentYear === toYear) t = to
      }
      array.push({ from: f, to: t })
    }
    return array
  }

  let objRange = []
  let fromMonth = from.getMonth()
  let fromYear = from.getFullYear()
  let toMonth = to.getMonth()
  let toYear = to.getFullYear()

  if (fromMonth === toMonth && fromYear === toYear)
    return [{ from, to }]

  if (fromYear === toYear && fromMonth < toMonth) {
    return _getRange(fromMonth, toMonth, fromYear)
  }

  if (fromYear < toYear) {
    for (let j = fromYear; j <= toYear; j++) {
      let i = fromMonth
      let monthlyEnd = 12
      if (j > fromYear) i = 1
      if (j === toYear) monthlyEnd = toMonth
      objRange = objRange.concat(_getRange(i, monthlyEnd, j))
    }
    return objRange
  }

}

const authenticatedRequests = function () {
  firebase.prototype.auth.currentUser.getToken(true).then(token => {
    console.log(token)
  })
}

self.addEventListener('beforeinstallprompt', function (event) {
  event.userChoice.then(function (choiceResult) {
    if (choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});

self.addEventListener('install', function (event) {
  var offlineRequest = new Request('offline.html');
  event.waitUntil(
    fetch(offlineRequest).then(function (response) {
      return caches.open('offline').then(function (cache) {
        return cache.put(offlineRequest, response);
      });
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('activate')
  //authenticatedRequests()

});

self.addEventListener('fetch', function (event) {

  console.log('fetch', event.request)
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request).catch(function () {
        console.log('Network failed so trying to get from cache: ' + event.request.url);

        return caches.open(CACHE_NAME)
          .then(function (cache) {
            return cache.match(event.request)
              .then(function (response) {
                if (response) {
                  console.log('Cache for : ' + event.request.url);
                  return response;
                }
                return caches.match('offline.html').then(response => {
                  if (response) {
                    console.log('offline found');
                    return response;
                  }
                  console.log('no offline file found')
                })
              })
          })
      })
    )
  }
})