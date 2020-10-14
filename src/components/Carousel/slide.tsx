// Import Swiper React components
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface ProductImage {
  src: string;
  alt: string;
}


interface SliderProps {
  name: string
  images: ProductImage[]
  categories: {
    name: string
  }
  id: any
  slug: string
}


const Slide = ({ name, images, categories, id, slug }: SliderProps) => {
  return (
    <SlideWrap id={id}>
      <Link href={'/produto/[...produto]'} as={`/produto/${id}/${slug}`}
       /*href={{
        pathname: '/produto/[...produto]',
        query: {
          id: id,
          slug: slug
        }
      }}
      as={`/produto/${slug}`}*/
      >
        <Img>
          <img
            loading="lazy"
            src={images[0].src.replace('scaled.jpg', '800x800.jpg')}
            alt={images[0].alt}
          />
          <div className="swiper-lazy-preloader"></div>
        </Img>
      </Link>
      <Link href={'/produto/[...produto]'} as={`/produto/${id}/${slug}`} >
        <a>
          <Title>{name}</Title>
        </a>
      </Link>
      <Category>
        <Link
          href={`/produtos?refinementList%5Btaxonomies.product_cat%5D%5B0%5D=${categories[0].name}`}
        >
          <a>{categories[0].name}</a>
        </Link>{' '}
        /
        <Link
          href={`/produtos?refinementList%5Btaxonomies.product_cat%5D%5B0%5D=${categories[1].name}`}
        >
          <a>{categories[1].name}</a>
        </Link>
      </Category>
    </SlideWrap>
  )
}
export default Slide
const SlideWrap = styled.div`
  height: 450px;
  padding: 20px;
  border: 1px solid var(--secondary-800);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.15fr;
  gap: 20px 20px;
  overflow: hidden;

  a {
    text-decoration: none;
    color: var(--secondary-400);
  }
`
const Img = styled.a`
  grid-area: 1 / 1 / 2 / 2;
`
const Title = styled.h2`
  grid-area: 2 / 1 / 3 / 2;
  color: var(--primary-300);
  font-size: var(--font-size-5);
  font-weight: 500;
  font-family: var(--font-title);
`
const Category = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  font-family: var(--font-title);
  color: var(--secondary-400);
  font-size: var(--font-size-7);
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
