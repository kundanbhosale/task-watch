import Navbar from '@/components/navBar'
import { GlobalStyles } from '@/styled/global'
import { Theme } from '@/styled/theme'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Script from 'next/script'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ViewportProvider } from '@/contexts/viewport'

const Toaster = dynamic(
  () => import('react-hot-toast').then((c) => c.Toaster),
  {
    ssr: false,
  }
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Task Watch</title>
        <meta
          name="description"
          content="Simplify Your Life and Work with Our Free, Personal Use Kanban Board - Your Data Stored Locally and Offline-Friendly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <NextNProgress
        color={Theme.colors.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <ViewportProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Navbar />
          <Toaster position="bottom-center" />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </ViewportProvider>
    </Fragment>
  )
}

export default App
