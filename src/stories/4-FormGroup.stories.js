import React from 'react'
import FormGroup from '../components/FormGroup'
import Input from '../components/Input'
import { InputState } from '../config/types'

export default {
  title: 'FormGroup',
  component: FormGroup
}

export const Example = () =>
  <FormGroup
    htmlFor='el1'
    label='Field label'
  >
    <Input id='el1' placeholder='Input component' />
  </FormGroup>

export const WithInvalidInput = () =>
  <FormGroup
    htmlFor='el2'
    label='Field label'
    error='This input is invalid'
  >
    <Input
      id='el2'
      defaultValue='invalid input'
      state={InputState.invalid}
    />
  </FormGroup>

export const WithValidInput = () =>
  <FormGroup
    htmlFor='el3'
    label='Field label'
  >
    <Input
      id='el3'
      defaultValue='valid input'
      state={InputState.valid}
    />
  </FormGroup>
