import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { NextSeo, LocalBusinessJsonLd } from 'next-seo'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

import GlobalStyles from 'styles/base'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Rava Cycle" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#af231c" />
        <meta name="theme-color" content="#af231c" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <link
          rel="shortcut icon"
          href="icons/icon_512x512.7da0e74c4b38e87662b25b231823b1c7.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="icons/icon_32x32.5d264e046b7499b4fff5e333c4f9c7a9.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="icons/icon_48x48.1a1322dcb1fb8c95013e56042d0d95a0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="icons/icon_72x72.a97e654a16b56f48d06464b2aca6aa32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="icons/icon_96x96.1d0a1717182c8783864480373581d8e2.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="icons/icon_144x144.239bd0f8991003e2d579c675d104dbdc.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="icons/icon_192x192.c4998646c7e685371c30143ff87f7f4a.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="icons/icon_256x256.bb8aa1a32f3ee4a18e8bdc3c371075e2.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="icons/icon_384x384.7b1ca195ce89e6d120f1e089eedd392a.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="icons/icon_512x512.7da0e74c4b38e87662b25b231823b1c7.png"
        />
      </Head>
      <NextSeo
        title="Rava Cycle"
        description="Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️"
        canonical="https://ravacycle.com"
        openGraph={{
          url: 'https://ravacycle.com',
          title:
            'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',
          description:
            'Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️',
          images: [{ url: '/images/share.png' }],
          site_name: 'Rava Cycle',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@ravacycle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <LocalBusinessJsonLd
        type="LocalBusiness"
        id="https://ravacycle.com/#logo"
        url="https://ravacycle.com"
        name="Rava Cycle"
        description="Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️"
        telephone="+553332773030"
        address={{
          streetAddress: 'Avenida Industrial, 312, Distrito Industrial',
          addressLocality: 'Governador Valadares',
          addressRegion: 'MG',
          postalCode: '35040-610',
          addressCountry: 'BR'
        }}
        geo={{
          latitude: '-18.897002',
          longitude: '-41.9927031'
        }}
        images={[
          'https://ravacycle.com/logo.jpg',
          'https://ravacycle.com/images/share.png'
        ]}
        openingHours={[
          {
            opens: '08:00',
            closes: '18:00',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            validFrom: '2019-12-23',
            validThrough: '2020-04-02'
          }
        ]}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
