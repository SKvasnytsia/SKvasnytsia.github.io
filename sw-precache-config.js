module.exports = {
  staticFileGlobs: [
    '/assets/*',
    'dist/**.js',
    'dist/index.html',
    'dist/manifest.json',
    '/index.html',
    '/manifest.json'
  ],
  navigateFallback: '/index.html'
};