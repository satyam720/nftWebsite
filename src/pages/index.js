import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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

      </>
    // </div>
  )
}
