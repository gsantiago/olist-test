import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './Logo'
import FormSignup from './FormSignup'
import theme from '../config/theme'

export default function App () {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <Section>
          <Logo />
          <FormSignup onSubmit={console.log} />
        </Section>
      </Wrapper>
    </React.Fragment>
  )
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px;
`

const Section = styled.section`
  max-width: 515px;
  flex-grow: 1;
  background-color: #fff;
  padding: 60px 70px;
  border:  3px solid #F2F2F2;
  border-box: border-size;
`
