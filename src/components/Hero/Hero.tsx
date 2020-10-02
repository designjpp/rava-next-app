//import { Highlight } from 'components/intro/Highlight'
import React from 'react'
import styled from 'styled-components'

import Img from '../../assets/images/herobg.png'
import HeroSVG from '../../assets/svg/Hero.svg'
import PlayerSvg from '../../assets/svg/player.svg'

export const Hero = () => (
  <Wrapper>
    <Image />
    <HeroImage>
      <HeroSVGImage />
    </HeroImage>
    <HeroDetail>
      <Player>
        <PlayerIcon />
      </Player>
      <HeroTitle>Bem-vindo(a) ao mundo Rava</HeroTitle>
      <HeroSubTitle>Assista e conheça mais</HeroSubTitle>
    </HeroDetail>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 96vw;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`
const Image = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${Img}) no-repeat center center;
  background-size: cover;
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
  cursor: pointer;
`
const PlayerIcon = styled(PlayerSvg)`
  height: 80px;
  width: 80px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
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
