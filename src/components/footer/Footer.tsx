import React, { ReactNode } from 'react'
import styled from 'styled-components'

//import { Container } from '../container/Container'

interface Social {
  icon: ReactNode
  to: string
}

interface FooterProps {
  logo: ReactNode
  social: Social[]
}

export const Footer = ({ logo, social }: FooterProps) => (
  <FooterRoot>
    <ContentBrand>
      <BrandWrap>
        <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
          {logo}
        </a>
      </BrandWrap>

      <List>
        {social.map((item) => (
          <ListItem key={item.to}>
            <a href={item.to} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </ListItem>
        ))}
      </List>
    </ContentBrand>
    <ContentMenu>1</ContentMenu>
    <ContentHero>2</ContentHero>
    <Copy>
      <div>
        © {new Date().getFullYear()} Rava Cycle - TODOS OS DIREITOS RESERVADOS.
      </div>

      <FooterLinks>
        <FooterLink href="/">Política de Privacidade</FooterLink>
        <FooterLink href="/">Termos de Uso</FooterLink>
      </FooterLinks>
    </Copy>
  </FooterRoot>
)

const FooterRoot = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: 1fr 0.15fr;
  padding: 40px 0;
`

const ContentBrand = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-area: 1 / 2 / 2 / 10;
  border-top: 2px solid #8effbf;
`
const BrandWrap = styled.div`
  grid-area: 1 / 1 / 2 / 4;
`
const ContentMenu = styled(ContentBrand)`
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  grid-area: 1 / 10 / 2 / 22;
`
const ContentHero = styled(ContentBrand)`
 grid-area: 1 / 22 / 2 / 30;
`

const List = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  margin-left: 30px;

  transition: 200ms opacity ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`
export const Copy = styled.div`
  grid-area: 3 / 1 / 3 / 15;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  border-top: 1px solid var(--color-dark-tint);
  font-size: var(--font-size-7);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-area: 2 / 2 / 3 / 30;
`
export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-area: 3 / 15 / 3 / 21;
  position: relative;
  width: 100%;
  border-top: 1px solid var(--color-dark-tint);
  border-left: 1px solid var(--color-dark-tint);
`
export const FooterLink = styled.a`
  text-decoration: none;
  margin: 0 20px 0 0;
  font-size: var(--font-size-7);
  color: var(--color-light-shade);
  position: relative;
  &:last-child {
    margin: 0;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
