// Core
import type { AppProps } from 'next/app'

// Styles
import '../styles/common/reset.scss'
import '../styles/common/globals.scss'
import '../styles/common/fonts.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
