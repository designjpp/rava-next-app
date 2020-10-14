import React from 'react';
import NextHead from 'next/head'

const defaultTitle = 'Rava Cycle'
const defaultDescription =
  'Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️'
const defaultOGURL = 'https://ravacycle.com'
const defaultOGImage = '../public/images/share.png'

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
  ogImage = '../public/images/share.png' || defaultOGImage
}: Head) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />

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

    <meta name="apple-mobile-web-app-status-bar-style" content="B3212F" />
    <meta name="msapplication-navbutton-color" content="#B3212F" />
    <meta name="msapplication-TileColor" content="#B3212F" />
    <meta name="theme-color" content="#B3212F" />

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
      href="../public/icons/icon-48x48.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="../public/icons/icon-72x72.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="96x96"
      href="../public/icons/icon-96x96.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="../public/icons/icon-144x144.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href="../public/icons/icon-192x192.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="256x256"
      href="../public/icons/icon-256x256.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="384x384"
      href="../public/icons/icon-384x384.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />
    <link
      rel="apple-touch-icon"
      sizes="512x512"
      href="../public/icons/icon-512x512.png?v=d2239ad948a87b2bd9a035070f9139d0"
    />

    <link rel="manifest" href="/manifest.json" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Grupo JPP - Importação e Exportação",
          "image": "https://grupojpp.com.br/logo.jpg",
          "@id": "https://grupojpp.com.br/#logo",
          "url": "https://grupojpp.com.br",
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