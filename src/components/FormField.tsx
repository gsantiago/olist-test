import React, { useMemo } from 'react'
import {Field, FieldProps} from 'react-final-form'
import nanoId from 'nanoid'
import FormGroup from './FormGroup'
import { InputState } from '../config/types'

export default function FormField (props: FormFieldProps) {
  const id = useMemo(() => nanoId(), [])

  const {
    label,
    component: Component,
    children,
    ...rest
  } = props

  return (
    <Field
      {...rest}
      parse={value => value}
    >
      {({ meta, input }) => (
        <FormGroup
          htmlFor={id}
          label={label}
          error={meta.submitFailed && meta.error ? meta.error : ''}
        >
          <Component
            id={id}
            state={input.value ? (
              meta.error ? InputState.invalid : InputState.valid
            ) : InputState.none}
            {...input}
          />
          {children}
        </FormGroup>
      )}
    </Field>
  )
}

export interface FormFieldProps extends FieldProps<any, any> {
  label: string
  component: React.FunctionComponent
}
