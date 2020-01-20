import React from 'react'
import { Form, FormProps } from 'react-final-form'
import { required, emailRequired, match } from '@polvo-labs/form-utils'
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
    <Form
      initialValues={{
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }}
      {...props}
    >
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Title>Crie sua conta</Title>
          <FormField
            name='name'
            label='Nome completo'
            component={Input}
            {...required}
          />
          <FormField
            name='email'
            label='E-mail'
            component={Input}
            type='email'
            {...emailRequired}
          />
          <FormField
            name='password'
            label='Senha'
            component={Input}
            type='password'
            validate={value => !isValid(value) && 'Preencha os requisitos da senha'}
          >
            <PasswordStrength
              value={values.password}
              rules={validates(values.password)}
            />
          </FormField>
          <FormField
            name='password_confirmation'
            label='Confirme sua senha'
            component={Input}
            validate={match.validate({ field: 'password' })}
            type='password'
          />
          <Button
            title='Criar conta'
            loading={submitting}
          />
        </form>
      )}
    </Form>
  )
}
