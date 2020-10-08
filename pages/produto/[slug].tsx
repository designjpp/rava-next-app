import React from 'react'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { getProductId, getAllProduct } from '../../utils/api'

const Product = ({ product }) => {
  //const router = useRouter()
  //console.log(product)
  /*if (!router.isFallback) {
    return <ErrorPage statusCode={404} />
  }*/
  return (
    <>
      <Main>
        {product.map(({ id, name, images, categories, attributes, description }) => {
          return (
            <React.Fragment key={id}>
              <Cover>
                <Feature>
                  <img
                    src={images[0].src.replace('scaled.jpg', '800x800.jpg')}
                    alt={images[0].alt}
                  />
                </Feature>
                <Details>
                  <Name>{name}</Name>
                  <Categories>
                    {categories[0].name} / {categories[1].name}{' '}
                  </Categories>
                </Details>
              </Cover>
              <Description>
                {description}
              </Description>
              <Spec>
                <SectionTitle>Especificações</SectionTitle>
                <ProductOverviewEl>
                  {attributes.map(({ id, name, options }) => (
                    <SpecItem key={id}>
                      <SpecTitle>{name}</SpecTitle>
                      <OptionsList>
                        {options.map((item, index) => (
                          <OptionsListItem key={index}>{item}</OptionsListItem>
                        ))}
                      </OptionsList>
                    </SpecItem>
                  ))}
                </ProductOverviewEl>
              </Spec>
            </React.Fragment>
          )
        })}
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { slug }
}) => {
  const product = await getProductId(slug)
  return {
    props: {
      product
    }
  }
}
/*export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const product = await getProductId(slug)
  //console.log(`slug ${posts}`)
  //const product = posts.find((x) => x.lug === slug)
  return {
    props: {
      product
    }
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllProduct()
  //const slugs = posts.map((post) => post.slug)
  //console.log(slugs)
  //const paths = slugs.map((slug) => ({
  //  params: { slug }
  //}))
  return {
    paths: posts.map(({slug}) => `/produto/${slug}`) || [],
    fallback: true
  }
}*/

export default Product

const Main = styled.main`
  display: block;
  min-height: 100vh;
`
const Cover = styled.div`
  display: flex;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  width: 96vw;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`
const Feature = styled.div`
  margin: 0 auto;
  grid-area: 1 / 2 / 1 / 30;
  height: 800px;
  overflow: hidden;
`
const Details = styled.div`
  grid-area: 2 / 3 / 2 / 30;
  height: calc(95vh - 800px);
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  display: grid;
`
const Name = styled.h1`
  font-size: 2rem;
`
const Categories = styled.div``

const Description = styled(Cover)`
height: auto;
`
const Spec = styled(Cover)`
  height: auto;
`
const SectionTitle = styled.h3`
  line-height: 1.3em;
  font-weight: 300;
  letter-spacing: 0.01em;
  margin: 0;
  padding: 20px 0;
  width: 100%;
  font-size: var(--font-size-3);
  color: var(--secondary-300);
  grid-area: 1 / 3 / 1 / 30;
  font-family: var(--font-title);
`

const ProductOverviewEl = styled.div`
  margin: 0;
  display: flex;
  position: relative;
  width: 100%;
  flex: 1 1 0%;
  flex-flow: column nowrap;
  place-content: stretch flex-start;
  grid-area: 2 / 3 / 2 / 30;
  align-items: stretch;
  display: grid;
  grid-auto-columns: auto;
  gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`

const SpecItem = styled.div``

const SpecTitle = styled.h3`
  font-weight: 700;
  font-size: var(--font-size-7);
  font-family: var(--font-title);
  letter-spacing: var(--letter-spacing-1);
  margin: 25px 0;
  position: relative;
  color: #222;
  text-transform: uppercase;

  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 2.5px;
    margin: 0 0 18px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`
const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-size: var(--font-size-6);
  line-height:var(--line-height-copy);
`
const OptionsListItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
`
