import type { NextPage } from 'next'
import Head from 'next/head'
import Newsletter from '../components/start'
import Script from 'next/script'
const Home: NextPage = () => {
  return (
    <div >
        
<Script async src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}></Script>
<Script id='1'>
 

{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
</Script>
      <Head>
        <title>naeRaste</title>
        <meta name="deScription" content="Superpowered notebooks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </Head>
    
          <Newsletter />
          
     
      

    </div>
  )
}

export default Home
