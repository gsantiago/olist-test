import React from 'react'
import styled from 'styled-components'
import Label from './Label'
import theme from '../config/theme'

export default function FormGroup (props: FormGroupProps) {
  const { label, htmlFor, error, children } = props

  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={htmlFor}>{label}</Label>
      </LabelContainer>
      {children}
      {error && <Error htmlFor={htmlFor}>{error}</Error>}
    </Container>
  )
}

export interface FormGroupProps {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}

const Container = styled.div`
  margin-bottom: 20px;
`

const LabelContainer = styled.div`
  margin-bottom: 5px;
`

const Error = styled.label`
  display: block;
  font-family: ${theme.fonts.primary};
  font-size: 12px;
  color: ${theme.colors.error};
  margin-top: 3px;
`
