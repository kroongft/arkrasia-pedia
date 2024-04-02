import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react'
import './global.css'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLayout from '@/components/layout/AppLayout'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>)

  return (
    <NextUIProvider navigate={router.push}>
      <Head>
        <title>아크라시아 대백과</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  )
}
