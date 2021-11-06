import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
<<<<<<< HEAD
import Hero from '../container/LandingPage/Hero/index'
=======
import NavBar from '../container/LandingPage/Navbar'
>>>>>>> 486a98a3527cce969e6ad3ab3883508f46c9c250

export default function Home() {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>NFT Website</title>
        <meta name="description" content="Get you own NFTs" />
      </Head>
<<<<<<< HEAD
      <Hero />
    </div>
=======

      <NavBar />

      </>
    // </div>
>>>>>>> 486a98a3527cce969e6ad3ab3883508f46c9c250
  )
}
