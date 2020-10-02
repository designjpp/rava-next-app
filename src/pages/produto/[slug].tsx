import Head from 'next/head'
import React from 'react'

import { Intro } from 'components/intro/Intro'

function Product() {
  return (
    <>
      <Head>
        <title>Conheça mais sobre a Rava Bike</title>
      </Head>
      <Intro>About page</Intro>
    </>
  )
}

export default Product
