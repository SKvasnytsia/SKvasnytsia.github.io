'use strict';

const cacheList = [
  // '0.chunk.js',
  // 'polyfills.bundle.js',
  // 'styles.bundle.js',
  // 'vendor.bundle.js',
  // 'main.bundle.js',
  // 'assets/icon-1x.png',
  // 'assets/chek.png',
  // 'index.html'
]
const getStartAndEndDatesPerMonth = function(date) {
    const year = date.getFullYear(),
        month = date.getMonth()

    return { 
        from : new Date(year, month, 1), 
        to: new Date(year, month + 1, 0) 
    }
}

const separateToMonthlyRanges = function(from, to, isOriginRange = true) {
  const _getRange = (start, finish, currentYear) => {
  const array = []

  for (let i = start; i <= finish; i++) {
      let {from: f, to: t} = 
      this.getStartAndEndDatesPerMonth(new Date(fromYear, i))
      if (isOriginRange) {
      if (i === start && currentYear === fromYear) f = from
      if (i === finish && currentYear === toYear) t = to
      }
      array.push({from: f, to: t})
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
  
  if (fromYear === toYear && fromMonth < toMonth){
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

self.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt', event.userChoice)
   event.userChoice.then(function(choiceResult) {

    console.log(choiceResult.outcome);

    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(cacheList);
    })
  );
});

self.addEventListener('activate', function(event) {

});

self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          //return caches.match('/sw-test/gallery/myLittleVader.jpg');
        });
      }
    }));
  }
});

self.addEventListener('push', function(event) {
  //event.data.json()
  if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
});

self.addEventListener('sync', function(event) {
  //event.data.json()
  if (event.data) {
    console.log('This sync event has data: ', event.data.text());
  } else {
    console.log('This sync event has no data.');
  }
});