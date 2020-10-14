//const path = require('path')
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const optimizedImages = require('next-optimized-images')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: !isProd
      },
      env: {
        GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
        ALGOLIA_APP_ID:process.env.ALGOLIA_APP_ID,
        ALGOLIA_SEARCH_KEY:process.env.ALGOLIA_SEARCH_KEY,
        ALGOLIA_INDEX_NAME:process.env.ALGOLIA_INDEX_NAME,
        //social profile
        INSTAGRAM_USERNAME: process.env.INSTAGRAM_USERNAME,
        WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
        //# # Woocommerce Keys
        CONSUMER_KEY: process.env.CONSUMER_KEY,
        CONSUMER_SECRET:process.env.CONSUMER_SECRET
      },
    }
  ],
  optimizedImages
])
