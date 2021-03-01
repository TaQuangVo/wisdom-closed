import {useEffect, useRef} from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

//component
import HomeMain from "../components/HomeMain"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Wisdom.nu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain />
    </div>
  )
}
