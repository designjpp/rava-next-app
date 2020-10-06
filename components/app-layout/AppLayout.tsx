import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Styles } from '../../styles/base'

import Facebook from '../../public/svg/facebook.svg'
import Instagram from '../../public/svg/instagram.svg'
import SearchIcon from '../../public/svg/searchIcon.svg'

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

      {children}

      <Footer
        social={[
          { icon: <Instagram />, to: 'https://instagram.com/ravacycle' },
          { icon: <Facebook />, to: 'https://facebook.com/ravacycle' }
        ]}
      />

      {isDev && <Devtools />}
    </Layout>
  </>
)
