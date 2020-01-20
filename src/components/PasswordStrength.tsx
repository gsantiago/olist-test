import React from 'react'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import Label from './Label'
import theme from '../config/theme'

export default function PasswordStrength (props: PasswordStrengthProps) {
  const { value, htmlFor, rules } = props

  const isEmpty = !value.length
  const countPasses = rules.filter(rule => rule.passes).length
  const rate = countPasses / rules.length
  const color = getColor(rate)

  return (
    <Container>
      <Indicators>
        <Indicator
          style={rate > 0 ? { backgroundColor: color } : {}}
        />
        <Indicator
          style={rate >= 0.5 ? { backgroundColor: color } : {}}
        />
        <Indicator
          style={rate === 1 ? { backgroundColor: color } : {}}
        />
      </Indicators>
      {rules.map(rule => (
        <Validation>
          <Circle
            color={isEmpty ? (
              theme.colors.light
            ) : (
              rule.passes ? theme.colors.success : theme.colors.error
            )}
          />
          <Label htmlFor={htmlFor}>{rule.message}</Label>
        </Validation>
      ))}
    </Container>
  )
}

export interface PasswordRule {
  message: string
  test(value: string): boolean
}

export interface PasswordRuleResult {
  message: string
  passes: boolean
}

export interface PasswordStrengthProps {
  value: string
  rules: PasswordRuleResult[]
  htmlFor?: string
}

export interface PasswordStrengthFunctions {
  validates(value: string): PasswordRuleResult[]
  isValid(value: string): boolean
}

export function generateRules (rules: PasswordRule[]): PasswordStrengthFunctions {
  const validates = (value: string): PasswordRuleResult[] =>
    rules.map(rule => ({
      message: rule.message,
      passes: rule.test(value)
    }))

  const isValid = (value: string): boolean =>
    validates(value).filter(result => !result.passes).length === 0

  return { validates, isValid }
}

const getColor = (rate: number): string => {
  if (rate === 1) {
    return theme.colors.success
  }

  if (rate >= 0.5) {
    return theme.colors.warning
  }

  return theme.colors.error
}

const Container = styled.div`
  
`

const Indicators = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const Indicator = styled.div`
  width: calc(33.33% - 3px);
  height: 8px;
  border-radius: 10px;
  background-color: ${theme.colors.light};
`

const Validation = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 5px;
  }
`

const Circle = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${prop('color')};
  margin-right: 5px;
`
