import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button
}

export const Normal = () =>
  <Button
    title='This is a button'
  />

export const Disabled = () =>
  <Button
    title='Disabled button'
    disabled
  />

export const Loading = () =>
  <Button
    title='A loading button'
    loading
  />
