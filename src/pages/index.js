import Head from 'next/head'
import Image from 'next/image'
import Hero from '../container/LandingPage/Hero/index'
import NavBar from '../container/LandingPage/Navbar'

export default function Home() {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>NFT Website</title>
        <meta name="description" content="Get you own NFTs" />
      </Head>
      <NavBar />
      <Hero /> 
      </>
  )
}
