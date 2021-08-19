export default {
  projectRoot: '.',
  pages: './src/pages',
  dist: './dist',
  public: './public',
  buildOptions: {
    site: 'https://global-travel.michifuchs.com',
    sitemap: true,
  },
  devOptions: {
    port: 3000,
  },
  renderers: ['@astrojs/renderer-preact'],
};
