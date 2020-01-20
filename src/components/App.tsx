import React from 'react'
import { createGlobalStyle } from 'styled-components'
import theme from '../config/theme'

export default function App () {
  return (
    <React.Fragment>
      <GlobalStyles />
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
