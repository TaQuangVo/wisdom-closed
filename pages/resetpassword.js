import {useState, useContext} from 'react'
import styleReset from "../styles/ResetPassword.module.css";
import {motion} from "framer-motion"
import {useEffect} from "react"
import { useRouter } from 'next/router'
import Link from "next/link"

//component 
import Background from "../components/Background"

//contexts
import {userContext} from "../contexts/userContext"


export default function purchase() {

    const router = useRouter();

    const [loading, setLoading] = useState(0); //0 init, 1 loading, 2 cusses, 3 error,

    const [email,setEmail] = useState("");
    const {error,forgotPassword} = useContext(userContext);

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(1)

        const sendingState = await forgotPassword(email);
        console.log(sendingState);

        if(sendingState.error){
            setLoading(3)
        }else{
            setLoading(2)
        }
    }


    return (
        <motion.div 
        className={styleReset.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleReset.content}>
               {
                   loading !== 2 ? (
                    <div className={styleReset.body}>
                    <h1>Reset your password</h1>
                    <p>Please enter your email below</p>
                    <p>We will send you the infomation to recover your password</p>
                    <form onSubmit={e => {handleSubmit(e)}}>
                        <input onChange={(e)=>{handleChange(e)}} type="text" name="email" placeholder="Email" />
                        <button type="submit" disabled={loading === 1}>
                            Send
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                            </svg>
                        </button>
                        <Link href="/signin"><p className={styleReset.forgotPass}>Sign in here</p></Link>
                        <p className={styleReset.error}>{error}</p>
                    </form>
                </div>
                   ) : (
                    <div className={styleReset.body}>
                    <h1>Reset your password</h1>
                    <p>Password-reset-email has been sent successfully!</p>
                    <p>Please check your email for more infomation</p>
                    <form onSubmit={e => {handleSubmit(e)}}>
                        <button type="submit" disabled={loading === 1}>
                            Resend
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                            </svg>
                        </button>
                        <Link href="/signin"><p className={styleReset.forgotPass}>Sign in here</p></Link>
                        <p className={styleReset.error}>{error}</p>
                    </form>
                </div>
                   )
               }
            </div>
        </motion.div>
    )
}
