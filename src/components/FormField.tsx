import React, { useMemo } from 'react'
import {Field, FieldProps} from 'react-final-form'
import nanoId from 'nanoid'
import FormGroup from './FormGroup'

export default function FormField (props: FormFieldProps) {
  const id = useMemo(() => nanoId(), [])

  const {
    label,
    component: Component,
    children,
    ...rest
  } = props

  return (
    <Field {...rest}>
      {({ meta, input }) => (
        <FormGroup
          htmlFor={id}
          label={label}
          error={meta.touched && meta.error ? meta.error : ''}
        >
          <Component
            id={id}
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
