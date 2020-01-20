import React from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function Label (props: LabelProps) {
  return <LabelStyled {...props} />
}

const LabelStyled = styled.label`
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  color: ${theme.colors.text}; 
`

export interface LabelProps {
  htmlFor?: string
  children: string
}
