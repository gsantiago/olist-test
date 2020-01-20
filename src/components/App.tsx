import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './Logo'
import FormSignup from './FormSignup'
import Success from './Success'
import theme from '../config/theme'

export default function App () {
  const [ isDone, setIsDone ] = useState<boolean>(false)

  return (
    <React.Fragment>
      <GlobalStyles />
      <Wrapper>
        <Section>
          <Logo />
          {isDone ? (
            <Success />
          ) : (
            <FormSignup
              onSubmit={() => new Promise(
                () => setTimeout(
                  () => setIsDone(true),
                  1000
                )
              )}
            />
          )}
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
  box-sizing: border-box;
`

const Section = styled.section`
  max-width: 515px;
  flex-grow: 1;
  background-color: #fff;
  padding: 60px 70px;
  border:  3px solid #F2F2F2;
  box-sizing: border-box;
`
