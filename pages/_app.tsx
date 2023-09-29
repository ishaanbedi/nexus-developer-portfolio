import '@/styles/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className='max-w-screen-lg mx-auto'>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
