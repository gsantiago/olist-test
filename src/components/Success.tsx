import React from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function Success () {
  return (
    <Container>
      <Icon />
      <Title>Tudo certo</Title>
      <Text>
        Verifique sua caixa de entrada para confirmar seu e-mail.
      </Text>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 81px;
  height: 81px;
  border: 3px solid ${theme.colors.successDark};
  border-radius: 100%;
  background: transparent url('${require('../images/check.svg')}') center no-repeat;
`

const Title = styled.h1`
  text-align: center;
  font-family: ${theme.fonts.primary};
  font-size: 22px;
  font-weight: normal;
  color: ${theme.colors.textDark};
  margin-top: 16px;
  margin-bottom: 10px;
  padding: 0;
`

const Text = styled.p`
  color: ${theme.colors.textDark};
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  margin: 0;
  padding: 0;
  line-height: 27px;
  max-width: 200px;
  text-align: center;
`
