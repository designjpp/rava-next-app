import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import { LazyLoadComponent } from 'react-lazy-load-image-component'

import { LandingPageProps } from '../types/api'
import { getAllPostsForHome } from '../utils/api'

import { Hero } from '../components/Hero/Hero'

import { ProductSlider } from '../components/carrousel/Slider'

import { InstagramFeed } from '../components/instagramfeed/Feed'
import instagrammer from "instagrammer"

const Index = ({ allPosts, instaFeed }: LandingPageProps) => (
  <>
    <Head>
      <title>Rava Cycle - Página Inicial</title>
    </Head>
    <Hero />
    <LazyLoadComponent>
      <ProductSlider products={allPosts} />
    </LazyLoadComponent>
    <LazyLoadComponent>
      <InstagramFeed feed={instaFeed} />
    </LazyLoadComponent>
  </>
)
//export async function getStaticProps() {}
export const getServerSideProps: GetServerSideProps = async () => {
  const allPosts = await getAllPostsForHome()

  //const instagrammer = dynamic(() => import('instagrammer'))

  const instaFeed = await instagrammer
    .profile(`${process.env.INSTAGRAM_USERNAME}`)
    .then((response) => {
      //console.log(response);
      return response
    })
    .catch(console.error)

  return {
    props: {
      allPosts,
      instaFeed
    }
  }
}

export default Index
