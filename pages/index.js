import {useEffect, useRef} from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from "framer-motion"




export default function Home() {

  return (
    <motion.div 
      className={styles.container} 
      exit={{opacity:0}} 
      initial={{opacity:0}} 
      animate={{opacity:1}}>
      <Head>
        <title>Wisdom.nu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <h1>Our site is temporarily closed</h1>
        <p>Please come back later!</p>
      </div>
      
    </motion.div>
  )
}
