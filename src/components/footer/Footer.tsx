import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Link from '../link/Link'
//import { Container } from '../container/Container'
import { FooterMenu } from './FooterLink'
import Logo from '../../assets/svg/marca.svg'
import FooterHero from '../../assets/svg/Hero.svg'
import JppLogo from '../../assets/svg/jpp.svg'

interface Social {
  icon: ReactNode
  to: string
}

interface FooterProps {
  social: Social[]
}

export const Footer = ({ social }: FooterProps) => (
  <FooterRoot>
    <ContentBrand>
      <BrandWrap>
        <LogoLink
          to="/"
          aria-label="Rava Cycle"
          title="Voltar a página inicial"
        >
          <FooterLogo />
        </LogoLink>
      </BrandWrap>

      <List>
        {social.map((item) => (
          <ListItem key={item.to}>
            <ListItemLink
              to={item.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </ListItemLink>
          </ListItem>
        ))}
      </List>
    </ContentBrand>
    <ContentMenu>
      <FooterMenuLink name="Produtos" href="/produtos" />
      <FooterMenuLink name="Sobre" href="/sobre" />
      <FooterMenuLink name="Contato" href="/contato" />
    </ContentMenu>
    <ContentHero>
      <ContentFHero />
    </ContentHero>
    <FooterCopy>
      <Copy>
        <p>
          © {new Date().getFullYear()} Rava Cycle - TODOS OS DIREITOS
          RESERVADOS.
        </p>
      </Copy>

      <FooterLinks>
        <p>Rava Cycle - Uma marca do Grupo JPP</p>
        <FooterLink href="https://grupojpp.com.br">
          <JppLogo />
        </FooterLink>
      </FooterLinks>
    </FooterCopy>
  </FooterRoot>
)

const FooterRoot = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: 1fr 0.15fr;
  padding: 40px 0 10px;
`

const ContentBrand = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 2 / 2 / 12;
  border-top: 2px solid var(--primary-300);
  padding: 50px 0;
`
const BrandWrap = styled.div`
  grid-area: 1 / 1 / 2 / 4;
`
const LogoLink = styled(Link)`
  position: relative;
  display: flex;
`
const FooterLogo = styled(Logo)`
  display: block;
  height: 65px;
  position: relative;
  path:first-child {
    fill: var(--primary-300);
  }
`

const ContentMenu = styled(ContentBrand)`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  grid-area: 1 / 12 / 2 / 18;
  flex: 1;
`
const FooterMenuLink = styled(FooterMenu)``

const ContentHero = styled(ContentBrand)`
  grid-area: 1 / 18 / 2 / 30;
  display: flex;
`
const ContentFHero = styled(FooterHero)`
  height: 250px;

  path {
    fill: var(--primary-300);
  }
`

const List = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  margin-right: 30px;
`
const ListItemLink = styled(Link)`
  transition: 200ms opacity ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  path {
    fill: var(--secondary-200);
  }
`
const FooterCopy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  font-size: var(--font-size-7);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 0;
  grid-area: 2 / 2 / 3 / 30;
`
const Copy = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  display: flex;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: var(--font-title);
`
const FooterLinks = styled.div`
  grid-area: 1 / 2 / 1 / 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`
const FooterLink = styled.a`
  text-decoration: none;
  font-size: var(--font-size-7);
  color: var(--secondary-200);
  position: relative;
  
  margin-left:10px;
  svg {
    width:100px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-300);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
