import {createContext, useState} from "react";
import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore"
import {firebaseConfig} from "../util/firebaseConfig";
import {useEffect} from "react";


export const userContext = createContext(null);





export default function UserContextProvider({children}) {

    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const db = firebase.firestore();

    const [user, setUSer] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((data) => {


            if (data) {
              // User is signed in.
                console.log(data.uid)

               

                db.collection("users").doc(data.uid).get().then(userData => {
                    setUSer(userData.data());
                  })
              
              console.log("user signed in")

            } else {
              // No user is signed in.
                setUSer(null)
                console.log("user not signed in")

            }
          });

    }, [])



    const signInUser = async (email,pwd) => {
        await auth.signInWithEmailAndPassword(email,pwd).then( () => {
            setError("");
        }).catch(error => {
            setError(error.message)
        })
    }
    const signOutUser = async () => {
        await auth.signOut();
    }


    return (
        <userContext.Provider value={{user,error, signInUser,signOutUser}}>
            {children} 
        </userContext.Provider>
    )
}
