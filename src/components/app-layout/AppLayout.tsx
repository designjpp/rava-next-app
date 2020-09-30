import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Styles } from '../../styles/base'

//import Dribbble from '../../assets/svg/dribbble.svg'
import Facebook from '../../assets/svg/facebook.svg'
//import Github from '../../assets/svg/github.svg'
import Instagram from '../../assets/svg/instagram.svg'
//import Linkedin from '../../assets/svg/linkedin.svg'
//import Twitter from '../../assets/svg/twitter.svg'

import SearchIcon from '../../assets/svg/searchIcon.svg';

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { HeaderLink } from '../header/HeaderLink'
import { Devtools } from '../devtools/Devtools'

interface AppLayoutProps {
  children: ReactNode
}

const isDev = process.env.NODE_ENV === 'development'

const Layout = styled.div`
  display: block;

  min-height: 100vh;
`

export const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <Styles />

    <Layout>
      <Header>
      <HeaderLink name="Produtos" href="/produtos" />
        <HeaderLink name="Sobre" href="/sobre" />
        <HeaderLink name="Contato" href="/contato" />
        <HeaderLink name="Busca" href="#" icon={<SearchIcon />} />
        <HeaderLink name="" href='https://instagram.com/ravacycle' icon={<Instagram />} />
        <HeaderLink name="" href='https://facebook.com/ravacycle' icon={<Facebook />} />
      </Header>

      {children}

      <Footer
        social={[
          { icon: <Instagram />, to: 'https://instagram.com/ravacycle' },
          { icon: <Facebook />, to: 'https://facebook.com/ravacycle' },
        ]}
      />

      {isDev && <Devtools />}
    </Layout>
  </>
)
