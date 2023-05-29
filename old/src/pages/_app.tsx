import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { domAnimation, LazyMotion } from 'framer-motion'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </LazyMotion>
  )
}
