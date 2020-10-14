import React, { useEffect } from 'react'
import { NextPage } from 'next'
//import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux'
import { fetchSaleProducts, fetchInstagram } from 'actions'
import { useProductSelector, instagramSelector } from 'selectors'

//import userInstagram from 'user-instagram'
import Layout from 'components/Layout'
//import instagrammer from "instagrammer"
//const userInstagram = dynamic(() => import('user-instagram'))

import { LandingPageProps } from 'types/api'
//import { getAllPostsForHome } from 'utils/api'

import Hero from 'components/Hero'

import Carousel from 'components/Carousel'

import { InstagramFeed } from 'components/Instagram'
//const InstagramFeed = dynamic<any>(() => import('../components/instagramfeed/Feed'))

const Index: NextPage<LandingPageProps> = () => {
  const dispatch = useDispatch()
  const { saleProducts } = useProductSelector()
  const { feed } = instagramSelector()

  useEffect(() => {
    dispatch(fetchSaleProducts())
    dispatch(fetchInstagram())
  }, [])
  return (
    <Layout
      title="Rava Cycle"
      description="Bikes, quadros e componentes para os praticantes do ciclismo (urbano, iniciante e intermediário). 🚴‍♀️ 🚴‍♂️"
      url={'/'}
      ogImage={''}
    >
      <Hero />
      
      <Carousel products={saleProducts} />
    
      <InstagramFeed feed={feed} />
    </Layout>
  )
}
//export async function GetServerSideProps() {}
/*export const getStaticProps: GetStaticProps = async () => {
  const Products = await getAllPostsForHome()

  const instaFeed = await userInstagram(`${process.env.INSTAGRAM_USERNAME}`)
    .then((response) => {
      //console.log(response);
      return response.posts
    })
    .catch(console.error)

  return {
    props: {
      Products,
      instaFeed
    }
  }
}*/

export default Index
