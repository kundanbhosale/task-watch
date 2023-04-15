import Navbar from '@/components/navBar'
import { GlobalStyles } from '@/styled/global'
import { Theme } from '@/styled/theme'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'

const Toaster = dynamic(
  () => import('react-hot-toast').then((c) => c.Toaster),
  {
    ssr: false,
  }
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Navbar />
      <Toaster position="bottom-center" />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default App
