import React from 'react';
import NextHead from 'next/head'

const defaultTitle = 'Rava Cycle'
const defaultDescription =
  'Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️'
const defaultOGURL = 'https://ravacycle.com'
const defaultOGImage = '/images/share.png'

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : defaultOGURL

type Head = {
  title: string
  description: string
  url: string
  ogImage: string
}

const Helmet = ({
  title = defaultTitle,
  description = 'Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️' || defaultDescription,
  url = 'https://ravacycle.com' || defaultOGURL,
  ogImage = '/images/share.png' || defaultOGImage
}: Head) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="msapplication-TileColor" content="#af231c" />
    <meta name="theme-color" content="#af231c" />

    <meta property="og:url" content={url || SITE_URL} />
    <meta property="og:title" content={title || ''} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || SITE_URL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="apple-mobile-web-app-status-bar-style" content="af231c" />
    <meta name="msapplication-navbutton-color" content="#af231c" />
    <meta name="msapplication-TileColor" content="#af231c" />
    <meta name="theme-color" content="#af231c" />

    <meta property="og:title" content={title} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="880px" />
    <meta property="og:image:height" content="440px" />
    <meta property="og:image:alt" content={description} />

    <meta name="twitter:title" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:site" content="@ravacycle" />
    <meta name="twitter:creator" content="@ravacycle" />
    <meta name="twitter:description" content={description} />

    <link rel="canonical" href={url || SITE_URL} />

    <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" />
    <link
      rel="apple-touch-icon"
      sizes="48x48"
      href="/icons/icon-48x48.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/icons/icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="96x96"
      href="/icons/icon-96x96.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/icons/icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href="/icons/icon-192x192.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="256x256"
      href="/icons/icon-256x256.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="384x384"
      href="/icons/icon-384x384.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="512x512"
      href="/icons/icon-512x512.png"
    />

    <link rel="manifest" href="/manifest.webmanifest" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Rava Cycle",
          "image": "https://ravacycle.com/public/logo.jpg",
          "@id": "https://ravacycle.com/#logo",
          "url": "https://ravacycle.com",
          "telephone": "+55333277-3030",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avenida Industrial, 312, Distrito Industrial",
            "addressLocality": "Governador Valadares",
            "addressRegion": "MG",
            "postalCode": "35040-610",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -18.897002,
            "longitude": -41.9927031
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/ravacycle",
            "https://www.instagram.com/ravacycle/",
            "https://www.youtube.com/channel/UCI8mX6XjYIPX9s_nUHLA4MQ",
            "https://ravacycle.com"
          ]
        }`
      }}
    />
  </NextHead>
)

export default Helmet