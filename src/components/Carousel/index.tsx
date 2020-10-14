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

const Carousel: React.FC<ProductListProps> = ({ products }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    dots: true,
    lazyLoad: true,
  }

  return (
    <CarouselWrap>
      <CarouselTitleWrap>
        <CarouselTitle>Lançamentos</CarouselTitle>
      </CarouselTitleWrap>
      <Hr />
      <CarouselLink to="/produtos">Veja todos</CarouselLink>
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
export const CarouselLink = styled(Link)`
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

  &:after {
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
  }
`