import React from 'react'
import PasswordStrength from '../components/PasswordStrength'

export default {
  title: 'PasswordStrength',
  component: PasswordStrength
}

export const Empty = () =>
  <div style={{ padding: 50 }}>
    <PasswordStrength
      value=''
      rules={[
        {
          message: 'Validation 1',
          passes: false
        },
        {
          message: 'Validation 2',
          passes: false
        },
        {
          message: 'Validation 3',
          passes: false
        }
      ]}
    />
  </div>

export const PartiallyFulfilled = () =>
  <div style={{ padding: 50 }}>
    <PasswordStrength
      value='something'
      rules={[
        {
          message: 'Validation 1',
          passes: true
        },
        {
          message: 'Validation 2',
          passes: false
        },
        {
          message: 'Validation 3',
          passes: false
        }
      ]}
    />
  </div>

export const MostlyFulfilled = () =>
  <div style={{ padding: 50 }}>
    <PasswordStrength
      value='something'
      rules={[
        {
          message: 'Validation 1',
          passes: true
        },
        {
          message: 'Validation 2',
          passes: true
        },
        {
          message: 'Validation 3',
          passes: false
        }
      ]}
    />
  </div>

export const FullyFulfilled = () =>
  <div style={{ padding: 50 }}>
    <PasswordStrength
      value='something'
      rules={[
        {
          message: 'Validation 1',
          passes: true
        },
        {
          message: 'Validation 2',
          passes: true
        },
        {
          message: 'Validation 3',
          passes: true
        }
      ]}
    />
  </div>
