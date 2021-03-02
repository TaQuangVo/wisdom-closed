import {useEffect, useRef} from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from "framer-motion"

//component
import HomeMain from "../components/HomeMain"

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
      <HomeMain />
    </motion.div>
  )
}
