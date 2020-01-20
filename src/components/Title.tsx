import React from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function Title (props: { children: string }) {
  return <TitleStyled>{props.children}</TitleStyled>
}

const TitleStyled = styled.h1`
  text-align: center;
  font-family: ${theme.fonts.primary};
  font-size: 22px;
  font-weight: normal;
  color: ${theme.colors.textDark};
  margin: 20px 0;
  padding: 0;
`
