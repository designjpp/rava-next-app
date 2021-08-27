import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

interface LinkProps {
  name: string
  href: string
  icon?: ReactNode
}

const LinkElement = styled.a`
  margin: 15px 0;
  text-decoration: none;
  transition: 200ms opacity ease-in-out;
  font-family: var(--font-title);
  position: relative;
  display: block;
  align-self: flex-start;

  flex: 0 0 auto;
  color: var(--secondary-200);
  font-size: var(--font-size-6);
  line-height: var(--line-height-solid);
  font-weight: 500;

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

const Icon = styled.div`
  svg {
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 8px;

    path {
      fill: var(--primary-300);
    }
  }
`

export const FooterMenu = ({ name, href, icon }: LinkProps) => {
  const isLink = typeof href !== 'undefined'
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '')

  if (isExternal) {
    return (
      <LinkElement href={href} target="_blank" rel={'noopener noreferrer'}>
        {icon && <Icon>{icon}</Icon>}
        {name}
      </LinkElement>
    )
  }

  return (
    <NextLink href={href}>
      <LinkElement href={href}>
        {icon && <Icon>{icon}</Icon>}
        {name}
      </LinkElement>
    </NextLink>
  )
}
