import * as React from 'react'
import '../public/static/css/main.css'
import {theme} from '@Variables'
import {ThemeProvider} from "styled-components"

function MyApp < T extends React.FunctionComponent > ({Component, pageProps} : {
  Component: T,
  pageProps: any
}) {
  return <ThemeProvider theme={theme}><Component {...pageProps}/></ThemeProvider>
}

export default MyApp
