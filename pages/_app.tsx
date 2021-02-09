import * as React from 'react'
import '../public/static/css/main.css'
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'
import {theme} from '@Variables'
import {ThemeProvider} from "styled-components"
import FooterLarge from '../src/components/footerlarge'

const queryClient = new QueryClient()

function MyApp < T extends React.FunctionComponent > ({Component, pageProps} : {
  Component: T,
  pageProps: any
}) {
  return <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}><Component {...pageProps}/>
    <FooterLarge/>
    </ThemeProvider>
    < ReactQueryDevtools initialIsOpen/>
  </QueryClientProvider>
}

export default MyApp
