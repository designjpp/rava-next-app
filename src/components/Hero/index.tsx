//import { Highlight } from 'components/intro/Highlight'
import React from 'react'
import styled from 'styled-components'

import ImgWebp from '../../assets/images/herobg.png?webp'
import Img from '../../assets/images/herobg.png'
import HeroSVG from '../../assets/svg/Hero.svg'
import PlayerSvg from '../../assets/svg/player.svg'

const Hero = () => (
  <Wrapper>
    <Image>
      <HeroImagePicture>
        <source srcSet={ImgWebp} type="image/webp" />
        <source srcSet={Img} type="image/png" />
        <img src={Img} />
      </HeroImagePicture>
    </Image>
    <HeroImage>
      <HeroSVGImage />
    </HeroImage>
    <HeroDetail>
      <Player>
        <CirclePulse />
        <Circle>
          <PlayerIcon />
        </Circle>
      </Player>
      <HeroTitle>Bem-vindo(a) ao mundo Rava</HeroTitle>
      <HeroSubTitle>Assista e conheça mais</HeroSubTitle>
    </HeroDetail>
  </Wrapper>
)
export default Hero

const Wrapper = styled.div`
  width: 96vw;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`
const Image = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  /*background: url(${Img}) no-repeat center center;
  background-size: cover;*/
`
const HeroImagePicture = styled.picture`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`
const HeroImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 50%;
  margin: auto;
`

const HeroSVGImage = styled(HeroSVG)`
  width: 100%;
  margin: auto;
`
const HeroDetail = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  width: 55%;
  margin: auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: repeat(4, 67px);
  gap: 0px;
`
const PlayerIcon = styled(PlayerSvg)`
  height: 80px;
  width: 80px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    fill: #228722;
    stroke: #228722;
    transform: scale(1.2, 1.2);
  }
`
const Player = styled.div`
  width: 225px;
  height: 225px;
  background: var(--primary-300);
  grid-area: 1 / 1 / 5 / 2;
  border-radius: var(--border-radius-circle);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #33cc33;
  margin: auto;
  transform: scale(1, 1);
`

const CirclePulse = styled(Circle)`
  animation-timing-function: ease;
  animation: pulse 2s infinite;
  background-color: #99e699;
  @keyframes pulse {
    0% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    25% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      -webkit-transform: scale(1.2, 1.2);
      transform: scale(1.2, 1.2);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
`

const HeroTitle = styled.h2`
  grid-area: 3 / 2 / 4 / 3;
  font-family: var(--font-title);
  font-size: var(--font-size-3);
`
const HeroSubTitle = styled.p`
  grid-area: 4 / 2 / 5 / 3;
  font-size: var(--font-size-5);
`
