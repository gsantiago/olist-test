import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function Title (props: HTMLProps<HTMLHeadingElement>) {
  return <TitleStyled {...props} />
}

const TitleStyled = styled.h1`
  text-align: center;
  font-family: ${theme.fonts.primary};
  font-size: 22px;
  font-weight: normal;
  color: ${theme.colors.textDark};
  margin: 0;
  padding: 0;
`
