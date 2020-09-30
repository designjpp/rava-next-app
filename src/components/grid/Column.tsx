import { math } from 'polished'
import styled, { css } from 'styled-components'
import { AlignSelfProperty } from 'csstype'

import { variables } from '../../styles/variables'
import { getValue } from '../../utils/get-value'

type TTheme = ColumnSettings & StyledTheme

interface StyledTheme {
  theme: {
    grid?: {
      gutter?: number
    }
  }
}

interface ColumnSettings {
  width?: number | string
  offset?: number | string | { left?: number | string; right?: number | string }
  align?: AlignSelfProperty
  gutter?: number | string
}

interface ColumnProps extends ColumnSettings {
  sm?: number | string | ColumnSettings
  md?: number | string | ColumnSettings
  lg?: number | string | ColumnSettings
}

const getMargin = ({ offset }: TTheme) => {
  const offsetLeft = typeof offset === 'object' ? offset.left : offset
  const offsetRight = typeof offset === 'object' ? offset.right : offset
  const left = getValue(offsetLeft, 0)
  const right = getValue(offsetRight, 0)

  return {
    left,
    right
  }
}

const columnStyles = (props: TTheme) => css`
  align-self: ${props.align || 'stretch'};

  padding-left: ${math(`${props.gutter || variables.gutter} / 2px`)};
  padding-right: ${math(`${props.gutter || variables.gutter} / 2px`)};
  margin-left: ${getMargin(props).left};
  margin-right: ${getMargin(props).right};

  width: ${getValue(props.width, 1)};
`

// render media queries for (sm, md, lg, etc.)
const breakpointStyles = (props: any) => {
  const output = []

  for (const breakpointName in variables.breakpoints) {
    if (props[breakpointName]) {
      const breakpoint = props[breakpointName]

      const breakpointProps = {
        ...props,
        ...(typeof breakpoint === 'object' ? breakpoint : { width: breakpoint })
      }

      output.push(css`
        @media (min-width: ${variables.breakpoints[breakpointName].width}) {
          ${columnStyles(breakpointProps)}
        }
      `)
    }
  }

  return output
}

export const Column = styled.div<ColumnProps>`
  flex: none;

  ${columnStyles}
  ${breakpointStyles}
`
