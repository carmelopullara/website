import Head from 'next/head'
import { Background } from '../components/Background'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import About from '../sections/About'
import Experience from '../sections/Experience'

import localFont from '@next/font/local'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Contact from '../sections/Contact'
import Stack from '../sections/Stack'

export const primaryFont = localFont({
  src: [
    {
      path: '../fonts/Mabry-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Mabry-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Mabry-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Mabry-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    function clearLoading() {
      setIsLoading(false)
    }

    const timeout = setTimeout(clearLoading, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Head>
        <title>Carmelo Pullara - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Front-End Engineer based in Italy. JavaScript enthusiast, with a passion for web, tech, startups and science."
        />
        <meta name="referrer" content="origin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pullara.me" />
        <meta
          property="og:title"
          content="Carmelo Pullara — Front-End Engineer"
        />
        <meta
          property="og:description"
          content="Personal website of Carmelo Pullara. Front-End Engineer and digital entrepreneur from Italy."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {isLoading && <Loading />}
      <div hidden={isLoading}>
        <Header />
        <Sidebar />
        <main className={primaryFont.className}>
          <Background />
          <About />
          <Experience />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
