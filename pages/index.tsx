import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Newsletter from '../components/start'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>naeRaste</title>
        <meta name="description" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </Head>
    
          <Newsletter />
     
      

    </div>
  )
}

export default Home
