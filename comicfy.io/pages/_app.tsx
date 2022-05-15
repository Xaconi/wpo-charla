// Core
import type { AppProps } from 'next/app'

// Styles
import '../styles/common/reset.scss'
import '../styles/common/globals.scss'
import '../styles/common/fonts.scss'
import '../styles/common/inputs.scss'
import '../styles/common/buttons.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
