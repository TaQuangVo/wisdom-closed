import {useState, useContext} from 'react'
import styleSignIn from "../styles/SignIn.module.css";
import {motion} from "framer-motion"
import {useEffect} from "react"
import { useRouter } from 'next/router'

//component 
import Background from "../components/Background"

//contexts
import {userContext} from "../contexts/userContext"


export default function purchase() {

    const router = useRouter();


    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, error ,signInUser} = useContext(userContext);

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }else if (e.target.name === "password"){
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(email,password);

    }

    useEffect(() => {
        if( user !== null){
            router.push("/user")
        }
    }, [user])

    return (
        <motion.div 
        className={styleSignIn.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleSignIn.content}>
                <div className={styleSignIn.body}>
                    <h1>Sign in</h1>
                    <p>Well come back to Wisdom.nu</p>
                    <p>Signin to see your status</p>
                    <form onSubmit={e => {handleSubmit(e)}}>
                        <input onChange={(e)=>{handleChange(e)}} type="text" name="email" placeholder="Email" />
                        <input onChange={(e)=>{handleChange(e)}} type="password" name="password" placeholder="Password" autoComplete="on"/>
                        <button type="submit" >
                            Sign in 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                            </svg>
                        </button>
                        <p className={styleSignIn.error}>{error}</p>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}
