import '../styles/globals.css'
import Layout from "../components/Layout"
import {useEffect} from "react";


import firebase from "firebase/app"
import {firebaseConfig} from "../util/firebaseConfig"

//context
import UserContextProvider from "../contexts/userContext";
import LanguageContextProvider from "../contexts/languageContext";



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
    
  }, [])

  return ( 
    <LanguageContextProvider>
       <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </LanguageContextProvider>
  )
}

export default MyApp
