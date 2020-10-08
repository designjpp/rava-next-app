import React from 'react'
import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'

import { LandingPageProps } from '../types/api'
import { getAllPostsForHome } from '../utils/api'

//import { BlockText } from '../components/block-text/BlockText'
//import { Highlight } from '../components/intro/Highlight'
//import { Intro } from '../components/intro/Intro'

import { Hero } from '../components/Hero/Hero'

import { ProductSlider } from '../components/carrousel/Slider'

import userInstagram from "user-instagram"
//import { instagramParser } from '../utils/Instagram'
import { InstagramFeed } from '../components/instagramfeed/Feed'

const Index = ({ allPosts, instaFeed }: LandingPageProps) => (
  <>
    <Head>
      <title>Rava Cycle - Página Inicial</title>
    </Head>

    <Hero />

    <ProductSlider products={allPosts} />

    <InstagramFeed feed={instaFeed} />
  </>
)
//export async function getStaticProps() {}
export const getServerSideProps: GetServerSideProps = async () => {
  
  const allPosts = await getAllPostsForHome()

  const instaFeed = await userInstagram(`${process.env.INSTAGRAM_USERNAME}`) // Same as getUserData()
  .then((response) => {
    //console.log(response);
     return response.posts
  }).catch(console.error);

  return {
    props: {
      allPosts,
      instaFeed
    }
  }
}

export default Index
