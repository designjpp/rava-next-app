import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { variables } from '../styles/variables'
import { helmet } from '../utils/helmet'
import { AppLayout } from '../components/app-layout/AppLayout'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={variables}>
    <AppLayout>
      <Head>
        <title>{helmet.title}</title>

        {helmet.meta.map((item) => (
          <meta key={item.name || item.property} {...item} />
        ))}

        {helmet.link.map((item) => (
          <link key={item.href || item.rel} {...item} />
        ))}
      </Head>

      <Component {...pageProps} />
    </AppLayout>
  </ThemeProvider>
)

export default App
