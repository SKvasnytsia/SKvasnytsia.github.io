module.exports = {
  staticFileGlobs: [
    'dist/assets/*',
    'dist/**.js',
    'dist/index.html'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};