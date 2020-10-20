// Import Swiper React components
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Link from 'components/Link'

import Slide from './slide'
import { SwiperStyle } from 'styles/swiper'

interface ProductImage {
  src: string;
  alt: string;
}

interface Product {
  [key: string]: any

  id: number
  images: ProductImage[];
  categories: {
    name: string
  }
  slug: string
}

interface ProductListProps {
  products: any;
}

const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false,
  dots: true,
  lazyLoad: true,
}

const Carousel: React.FC<ProductListProps> = ({ products }:ProductListProps) => {
  return (
    <CarouselWrap>
      <CarouselTitleWrap>
        <CarouselTitle>Lançamentos</CarouselTitle>
      </CarouselTitleWrap>
      <Hr />
      <CarouselLink to="/produtos">
      <Bcircle aria-hidden="true" >
      <Bicon />
    </Bcircle>
    <BText>Veja todos</BText>
    </CarouselLink>
      <SwiperStyle>
        <Slider {...settings}>
          {products.map(({ name, id, images, categories, slug }) => (
            <Slide
              key={id}
              id={id}
              name={name}
              images={images}
              categories={categories}
              slug={slug}
            />
          ))}
        </Slider>
      </SwiperStyle>
    </CarouselWrap>
  )
}
export default Carousel

const CarouselWrap = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  flex-direction: column;
  align-items: center;
  display: grid;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: 0.25fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 30px;
`
const CarouselTitleWrap = styled.div`
  display: flex;
  flex: 1;
  grid-area: 1 / 2 / 1 / 5;
  font-family: var(--font-title);
  align-items: center;
`
const CarouselTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  color: var(--primary-300);
  font-size: var(--font-size-5);
  font-weight: 300;
`
const Hr = styled.div`
  display: flex;
  flex: 1;
  grid-area: 1 / 5 / 1 / 27;
  align-items: center;
  background: var(--secondary-800);
  height: 1px;
`
const Bcircle =  styled.span`
transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
`
const Bicon =  styled.span`
transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
  &:before {
  position: absolute;
  content: '';
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
          transform: rotate(45deg);
}
`
const BText =  styled.span`
transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
`

const CarouselLink = styled(Link)`
  grid-area: 1 / 28 / 1 / 30;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  align-items: center;
  border: 1px solid var(--primary-300);
  text-decoration: none;
  font-family: var(--font-title);
  color: var(--color-secondary-300);
  transition: 0.2s ease-in-out;
  overflow: hidden;
  z-index: 10;

  &:hover ${Bcircle} {
  width: 100%;
}
  &:hover ${Bicon} {
  background: #fff;
  -webkit-transform: translate(1rem, 0);
          transform: translate(1rem, 0);
  }
  &:hover ${BText} {
  color: #fff;
}

/*  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: var(--primary-300);
    transition: all 0.3s ease;
  }
  &:hover {
    color: var(--color-bg);
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }*/
`
