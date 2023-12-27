import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import GlobalStyle from '@/globalstyles'
import Header from '@/components/Header'
import { SessionProvider } from 'next-auth/react'

const theme: DefaultTheme = {
  primary: '#111',
  secondary: '#0070f3',
  white: '#fff',
  brightBlue: '#3e64e5',
  silver: 'silver',
  darkGrey: '#31343e'
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
