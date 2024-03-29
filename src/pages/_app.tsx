import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react'
import './global.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      <Head>
        <title>아크라시아 대백과</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
