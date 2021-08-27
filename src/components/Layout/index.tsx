import React, { ReactNode } from 'react'
import styled from 'styled-components'

import dynamic from 'next/dynamic'

//const Footer = dynamic(import('components/Footer'))

//import Helmet from 'utils/helmet'
import Header from 'components/Header'
import { HeaderLink } from 'components/Header/HeaderLink'
import Footer from 'components/Footer'

import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'
import SearchIcon from '../../assets/svg/searchIcon.svg'

type AppLayoutProps = {
  children?: ReactNode
}
const SocialArray = [
  { icon: <Instagram />, to: 'https://instagram.com/ravacycle' },
  { icon: <Facebook />, to: 'https://facebook.com/ravacycle' }
]

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header>
        <HeaderLink name="Produtos" href="/produtos" />
        <HeaderLink name="Sobre" href="/sobre" />
        <HeaderLink name="Contato" href="/contato" />
        <HeaderLink name="Busca" href="#" icon={<SearchIcon />} />
        <HeaderLink
          name=""
          href="https://instagram.com/ravacycle"
          icon={<Instagram />}
        />
        <HeaderLink
          name=""
          href="https://facebook.com/ravacycle"
          icon={<Facebook />}
        />
      </Header>
      <Main>{children}</Main>
      <Footer
        social={SocialArray}
      />
    </>
  )
}

export default Layout

const AppWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Main = styled.main`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`