import React, { ReactNode } from 'react'
//import Link from 'next/link'
import styled from 'styled-components'
import Link from '../link/Link'

import StarterLogo from '../../assets/svg/marca.svg'

import { breakpoints, variables } from '../../styles/variables'
//import { Container } from '../container/Container'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => (
  <HeaderRoot>
    <Content>
      <LogoLink to="/" aria-label="Rava Cycle" title="Voltar a página inicial">
        <Logo />
      </LogoLink>
    </Content>
    <Navigation>{children}</Navigation>
  </HeaderRoot>
)

const HeaderRoot = styled.header`
  font-family: var(--font-title);
  color: var(--secondary-200);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 20px 0 0;
  z-index: 1;
  height: 80px;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(30, 1fr);
    gap: 0;
    align-items: stretch;
  }
  @media (max-width: 425px) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(15, 1fr);
    grid-auto-rows: minmax(max-content, calc(100vw / 10));
    align-items: start;
    width: 100%;
    margin: 0;
    padding: 15px 0px;
  }
  :before {
    content: '';
    background: var(--primary-300);
    display: block;
    content: '';
    width: calc(4vw / 2);
    height: inherit;
    position: absolute;
    transform: translate(0, 0);
    right: 0;
    height: 100%;
  }
`

const Content = styled.div`
  align-items: stretch;
  display: flex;

  @supports (display: grid) {
    align-items: stretch;
    grid-column-start: 2;
    grid-column-end: 6;
  }
  @media (max-width: 425px) {
    grid-column-start: 2;
    grid-column-end: 8;
  }
`
const LogoLink = styled(Link)`
  position: relative;
  display: flex;

  :before {
    content: '';
    background: var(--primary-300);
    display: block;
    content: '';
    width: 300px;
    height: inherit;
    position: absolute;
    transform: translate(-25%, 0);
    height: 100%;
  }
`

const Logo = styled(StarterLogo)`
  display: block;
  margin: auto;
  height: 45px;
  position: relative;
  path:first-child {
    fill: var(--color-bg);
  }
`

const Navigation = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: center;
  position: relative;
  grid-column-start: 18;
  grid-column-end: 30;
  justify-content: flex-end;
`
