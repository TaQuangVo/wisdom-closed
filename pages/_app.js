import '../styles/globals.css'
import Layout from "../components/Layout"
import UserContextProvider from "../contexts/userContext";
import {useEffect} from "react";

import firebase from "firebase/app"
import {firebaseConfig} from "../util/firebaseConfig"





function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
    
  }, [])

  return ( 
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  )
}

export default MyApp
