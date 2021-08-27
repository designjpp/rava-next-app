import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import MainLayout from 'components/Layout'
//import SingleProductRenderer from '../../components/SingleProduct/SingleProductRenderer';
import { useProductSelector } from 'selectors'
import { fetchProductById } from 'actions'

const Product = () => {
  const [isLoading, setLoading] = useState(false)

  const router = useRouter()
  const productParam = router.query.produto
  const productId = productParam ? productParam[0] : null

  const { currentProduct } = useProductSelector()
  const currentProductId = `${currentProduct?.id ?? ''}`
  const currentProductName = currentProduct?.name ?? '...'
  //console.log(currentProductId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (productId && productId !== currentProductId) {
      setLoading(true)
      dispatch(
        fetchProductById(productId, () => {
          setLoading(false)
        })
      )
    }
  }, [productId])

  return (
    <MainLayout>
      <NextSeo
        title={`${currentProductName} - Rava Cycle`}
        description="A short description goes here."
      />
      <Main>
        <Cover>
          <Feature>
            <img
              src={
                currentProduct?.images[0].src.replace(
                  'scaled.jpg',
                  '800x800.jpg'
                ) ?? '...'
              }
              alt={currentProduct?.images[0].alt ?? '...'}
            />
          </Feature>
          <Details>
            <Name>{currentProduct?.name ?? '...'}</Name>
            <Categories>
              {currentProduct?.categories[0].name ?? '...'} /{' '}
              {currentProduct?.categories[1].name ?? '...'}
            </Categories>
          </Details>
        </Cover>
        <Spec>
          <SectionTitle>Especificações</SectionTitle>
          <ProductOverviewEl>
            {currentProduct?.attributes.map(({ id, name, options }) => (
              <SpecItem key={id}>
                <SpecTitle>{name}</SpecTitle>
                <OptionsList>
                  {options.map((item, index) => (
                    <OptionsListItem key={index}>{item}</OptionsListItem>
                  ))}
                </OptionsList>
              </SpecItem>
            )) ?? '...'}
          </ProductOverviewEl>
        </Spec>
      </Main>
    </MainLayout>
  )
}

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
const Spec = styled(Cover)`
  height: auto;
`
const SectionTitle = styled.h3`
  line-height: 1.3em;
  font-weight: 700;
  letter-spacing: 0.01em;
  margin: 0;
  padding: 20px 0;
  width: 100%;
  font-size: 3.5em;
  color: rgba(25, 27, 24, 0.8);
  grid-area: 1 / 3 / 1 / 30;
  @media (max-width: 320px) {
    font-size: 2.5em;
  }
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
  grid-auto-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`

const SpecItem = styled.div`
  background: #fbfafc;
  padding: 20px;
`
const SpecTitle = styled.h3`
  font-weight: bold;
  font-size: 15px;
  margin: 15px 0;
  position: relative;
  line-height: 18px;
  color: #222;
  &:before {
    display: block;
    content: '';
    width: 26px;
    height: 1px;
    margin: 0 0 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
  font-size: 13px;
  color: #333;
`
const OptionsListItem = styled.li`
  margin: 0 0 18px;
  padding: 0;
  width: 100%;
`
