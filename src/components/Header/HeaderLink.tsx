import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

interface LinkProps {
  name: string
  href: string
  icon?: ReactNode
}

const LinkElement = styled.a`
  display: flex;

  margin-left: 40px;

  text-decoration: none;

  color: var(--color-bg);
  transition: 200ms opacity ease-in-out;
  font-family: var(--font-title);

  align-items: center;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`

const Icon = styled.div`
  svg {
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 8px;

    path {
      fill: var(--color-bg);
    }
  }
`

export const HeaderLink = ({ name, href, icon }: LinkProps) => {
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
