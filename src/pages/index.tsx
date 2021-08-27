import React, { useEffect } from 'react'
import { NextPage } from 'next'
//import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux'
import { fetchSaleProducts, fetchInstagram } from 'actions'
import { useProductSelector, instagramSelector } from 'selectors'

import Layout from 'components/Layout'

import { LandingPageProps } from 'types/api'

import Hero from 'components/Hero'

import Carousel from 'components/Carousel'

import { InstagramFeed } from 'components/Instagram'

const Index: NextPage<LandingPageProps> = () => {
  const dispatch = useDispatch()
  const { saleProducts } = useProductSelector()
  const { feed } = instagramSelector()

  useEffect(() => {
    dispatch(fetchSaleProducts())
    dispatch(fetchInstagram())
  }, [])

  return (
    <Layout>

      <Hero />

      <Carousel products={saleProducts} />

      <InstagramFeed feed={feed} />

    </Layout>
  )
}


export default Index
