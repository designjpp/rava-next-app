// Import Swiper React components
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Scrollbar, Navigation } from 'swiper'
import styled from 'styled-components'
import Link from '../link/Link'
import { Slider } from './Slide'
import { SwiperStyle } from '../../styles/Swiper'

SwiperCore.use([Scrollbar, Navigation])

export const ProductSlider = ({ products }: any) => {
  //const [Scrollbar] = useState(null)
  //console.log(products)
  return (
    <CarouselWrap>
      <CarouselTitleWrap>
        <CarouselTitle>Lançamentos</CarouselTitle>
      </CarouselTitleWrap>
      <Hr />
      <CarouselLink to="/produtos">Veja todos</CarouselLink>
      <SwiperStyle>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          navigation
          grabCursor={true}
          //onSlideChange={() => console.log('slide change')}
          //onSwiper={(swiper) => console.log(swiper)}
          //mousewheel: true,
          scrollbar={{ hide: false }}
        >
          {products.map(({ name, id, images, categories }) => (
            <SwiperSlide key={id}>
              <Slider name={name} images={images} categories={categories} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperStyle>
    </CarouselWrap>
  )
}

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
