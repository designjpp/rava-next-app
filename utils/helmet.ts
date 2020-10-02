//import Favicon from
import Share from '../assets/images/share.png'

const title = 'Create Ueno App'
const description = 'The easiest and fastest way to create new projects.'

export const helmet = {
  title,
  titleTemplate: '%s - Ueno',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'B3212F' },
    { name: 'msapplication-navbutton-color', content: '#B3212F' },
    { name: 'msapplication-TileColor', content: '#B3212F' },
    { name: 'theme-color', content: '#B3212F' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: Share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: Share },
    { name: 'twitter:site', content: '@ravacycle' },
    { name: 'twitter:creator', content: '@ravacycle' },
    { name: 'twitter:description', content: description }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon-32x32.png' },
    { rel: 'manifest', href: 'manifest.webmanifest' },
    {
      rel: 'apple-touch-icon',
      sizes: '48x48',
      href: '/icons/icon-48x48.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/icons/icon-72x72.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '96x96',
      href: '/icons/icon-96x96.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/icons/icon-144x144.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '192x192',
      href: '/icons/icon-192x192.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '256x256',
      href: '/icons/icon-256x256.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '384x384',
      href: '/icons/icon-384x384.png?v=d2239ad948a87b2bd9a035070f9139d0'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '512x512',
      href: '/icons/icon-512x512.png?v=d2239ad948a87b2bd9a035070f9139d0'
    }
  ]
}
