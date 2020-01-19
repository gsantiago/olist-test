import React from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function Button (props: ButtonProps) {
  const { title, disabled, loading } = props

  return (
    <Container
      title={title}
      disabled={disabled || loading}
    >
      {loading ? (
        <img
          src={require('../images/loading.gif')}
          height={40}
        />
      ) : (
        title
      )}
    </Container>
  )
}

export interface ButtonProps {
  title: string
  disabled?: boolean
  loading?: boolean
}

const Container = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  background-color: ${theme.colors.success};
  padding: 0;
  border: none;
  font-family: ${theme.fonts.primary};
  font-size: 18px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  &:not([disabled]):hover, {
  &:not([disabled]):active {
    background-color: ${theme.colors.successDark};
  }

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
