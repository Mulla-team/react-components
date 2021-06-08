import * as React from 'react'
import '../public/static/css/main.css'
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'
import storage from 'local-storage-fallback'
import {theme as generateTheme} from '@Variables'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import NavBar from '@Components/navbar'
import NavDrawer from '@Components/navdrawer'
import MenuToggle from '@Components/menutoggle'

const {useEffect, useState} = React

const queryClient = new QueryClient()

const GlobalStyle = createGlobalStyle `
  body {
    background-color: ${props => (props.theme.mode === "dark" ? props.theme.bgDark : props.theme.bgWhite)};
    transition: background-color 0.15s ease-in;
    color: ${props => (props.theme.mode === "dark" ? props.theme.bgWhite : props.theme.bgDark)};
  }
`

function MyApp < T extends React.FunctionComponent > ({Component, pageProps} : {
  Component: T,
  pageProps: any
}) {

  const [theme, setTheme] = useState<{mode: 'light' | 'dark'}>(getInitialTheme)
  const [isNavMenuVisible, toggleNavMenu] = useState<boolean>(false)

  useEffect(() => {
    console.log({theme});
    storage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  function getInitialTheme(): {mode: 'light' | 'dark'} {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'dark' }
  }

  return <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={generateTheme(theme.mode)}>
        <GlobalStyle/>
        <MenuToggle onToggleNavMenu={() => toggleNavMenu(!isNavMenuVisible)}/>
        <NavDrawer themeMode={theme.mode} isVisible={isNavMenuVisible} onToggleMode={() => setTheme(
          theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
        )} onClose={() => toggleNavMenu(false)}/>
        <div style={{
          filter: `blur(${isNavMenuVisible ? '5px' : '0px'})`
        }}>
          <NavBar themeMode={theme.mode} onToggleNavMenu={() => {
          toggleNavMenu(true)}} onToggleMode={() => setTheme(
          theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
        )}/>
          <Component {...pageProps}/>
        </div>
      </ThemeProvider>
      < ReactQueryDevtools initialIsOpen/>
    </QueryClientProvider>
}

export default MyApp
