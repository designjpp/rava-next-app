import React, { ReactNode } from 'react'
import styled from 'styled-components'

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => <Wrap>{children}</Wrap>

export default Layout

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: normal;
  align-items: stretch;
  box-sizing: content-box;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 984px;
    max-width: calc(50% + (1280px / 2) - 5px);
  }
  @media (min-width: 1280px) {
    width: 100%;
    max-width: calc(50% + (1280px / 2) - 10px);
  }
  @media (min-width: 1440px) {
    width: 100%;
    max-width: calc(50% + (1440px / 2) - 20px);
  }
  @media (min-width: 1600px) {
    width: 100%;
    max-width: calc(50% + (1750px / 2) - 30px);
  }
  @media (min-width: 1920px) {
    width: 100%;
    max-width: calc(50% + (1920px / 2) - 50px);
  }
`
