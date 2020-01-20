import React from 'react'
import { Form, FormProps } from 'react-final-form'
import Title from './Title'
import Input from './Input'
import FormField from './FormField'
import PasswordStrength, { generateRules } from './PasswordStrength'
import Button from './Button'

const { validates, isValid } = generateRules([
  {
    message: 'Pelo menos 6 caracteres',
    test: value => value.length >= 6
  },
  {
    message: 'Pelo menos 1 letra maiúscula',
    test: value => /[A-Z]/g.test(value)
  },
  {
    message: 'Pelo menos 1 número',
    test: value => /[0-9]/g.test(value)
  }
])

export default function FormSignup (props: FormProps) {
  return (
    <Form {...props}>
      {({ handleSubmit, submitting, values = {} }) => (
        <React.Fragment>
          <Title>Crie sua conta</Title>
          <FormField
            name='name'
            label='Nome completo'
            component={Input}
          />
          <FormField
            name='email'
            label='E-mail'
            component={Input}
            type='email'
          />
          <FormField
            name='password'
            label='Senha'
            component={Input}
            type='password'
          >
            <PasswordStrength
              value={values.password || ''}
              rules={validates(values.password || '')}
            />
          </FormField>
          <FormField
            name='password_confirmation'
            label='Confirme sua senha'
            component={Input}
          />
          <Button
            title='Criar conta'
          />
        </React.Fragment>
      )}
    </Form>
  )
}
