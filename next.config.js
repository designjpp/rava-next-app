//const withPlugins = require('next-compose-plugins')
const path = require('path')
const withPWA = require('next-pwa')
const withOptimizedImages = require('next-optimized-images')
//const { resolve } = require('path')

const isProd = process.env.NODE_ENV === 'production'

let config = {
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
    ALGOLIA_INDEX_NAME: process.env.ALGOLIA_INDEX_NAME,
    //social profile
    INSTAGRAM_USERNAME: process.env.INSTAGRAM_USERNAME,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    //# # Woocommerce Keys
    CONSUMER_KEY: process.env.CONSUMER_KEY,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET
  }
}

const optimizedImages = {
  optimizeImagesInDev: true
}

const granularChunks = {
  experimental: {
    granularChunks: true
  }
}

module.exports = withPWA(
  withOptimizedImages({
    ...config,
    ...optimizedImages,
    ...granularChunks,
  })
)
