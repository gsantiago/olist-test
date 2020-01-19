import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { switchProp } from 'styled-tools'
import theme from '../config/theme'
import { InputState } from '../config/types'

export default function Input (props: InputProps) {
  return (
    <StyledInput {...props} />
  )
}

Input.defaultProps = {
  state: InputState.none
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  state?: InputState
}

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 10px;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  border: 1px solid;
  border-color: ${switchProp('state', {
    [InputState.invalid]: theme.colors.error,
    [InputState.valid]: theme.colors.success,
    [InputState.none]: theme.colors.border
  }, 'hotpink')};
  box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.05);

  &::placeholder {
    opacity: 1;
    color: ${theme.colors.placeholder};
  }
`
