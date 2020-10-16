//const withPlugins = require('next-compose-plugins')
const path = require('path')
const withPWA = require('next-pwa')
const withOptimizedImages = require('next-optimized-images')
const WebpackPwaManifest = require('webpack-pwa-manifest')
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

const manifestConfig = {
  filename: 'public/manifest.webmanifest',
  name: 'Rava Cycle',
  short_name: 'ravacycle',
  description:
    'Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️',
  background_color: '#af231c',
  theme_color: '#af231c',
  display: 'standalone',
  orientation: 'any',
  //inject: false,
  //start_url: '/',
  //lang: 'pt-Br',
  //dir: 'ltr',
  //includeDirectory: true,
  //publicPath: '/public',
  //ios: {
  //  'apple-mobile-web-app-title': 'Rava Cycle',
  //  'apple-mobile-web-app-status-bar-style': '#af231c'
  //},
  icons: [
    {
      src: path.resolve('public/icons/icon.png'),
      sizes: [32,48, 72, 96, 128, 144, 152, 192, 256, 384, 512],
      destination: path.join('icons'),
      //ios: true
    },
    {
      src: path.resolve('public/icons/icon.png'),
      sizes: [57, 60, 72, 76, 120, 144, 152, 180],
      destination: path.join('icons'),
    //  ios: true
    },
    {
      src: path.resolve('public/icons/icon.png'),
      destination: path.join('icons'),
      size: '1024x1024',
      purpose: 'maskable'
    }
  ]
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
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      })

      if (!isProd && !isServer) {
        config.plugins.push(new WebpackPwaManifest(manifestConfig))
      }
      config.resolve.alias['@svg'] = path.join(__dirname, 'public/svg')
      config.resolve.alias['@images'] = path.join(__dirname, 'public/images')
      return config
    }
  })
)
