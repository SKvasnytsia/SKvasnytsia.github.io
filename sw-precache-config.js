module.exports = {
  staticFileGlobs: [
    'dist/assets/*',
    'dist/**.js',
    'dist/index.html',
    'dist/manifest.json',
    '/index.html',
    '/manifest.json'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};