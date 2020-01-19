import React from 'react'
import Input from '../components/Input'
import { InputState } from '../config/types'

export default {
  title: 'Input',
  component: Input
}

export const Placeholder = () =>
  <Input
    placeholder='this is a the placeholder'
  />

export const WithValue = () =>
  <Input
    defaultValue='input value'
  />

export const Invalid = () =>
  <Input
    defaultValue='invalid input'
    state={InputState.invalid}
  />

export const Valid = () =>
  <Input
    defaultValue='valid input'
    state={InputState.valid}
  />
