import { Footer, Header } from '@/components/imports'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
