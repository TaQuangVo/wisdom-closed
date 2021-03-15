import {useState, useContext} from 'react'
import styleSignIn from "../styles/SignIn.module.css";
import {motion} from "framer-motion"
import {useEffect} from "react"
import { useRouter } from 'next/router'
import Link from "next/link"

//contexts
import {userContext} from "../contexts/userContext"
import {languageContext} from "../contexts/languageContext";


export default function purchase() {

    const router = useRouter();
    const  {isEng, changeLanguage} = useContext(languageContext);

    const textAlign = isEng ? "left":"right";


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

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
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
                    {languageLayout(<h1>Sign in</h1>,<h1>تسجيل الدخول</h1>)}
                    {languageLayout(<p>Welcome back to Wizzdom.net</p>,<div className="arabicText"><p>مرحباً بك مرة أخرى في Wizzdom.net</p></div>)}
                    {languageLayout(<p>Sign in to see your status</p>,<p>سجل دخولك لرؤية بياناتك</p>)}

                    
                    <form onSubmit={e => {handleSubmit(e)}}>
                        <input onChange={(e)=>{handleChange(e)}} style={{textAlign:textAlign}} type="text" name="email" placeholder={languageLayout("email","البريد الألكتروني")} />
                        <input onChange={(e)=>{handleChange(e)}} style={{textAlign:textAlign}}  type="password" name="password" placeholder={languageLayout("Password", "كلمة السر")} autoComplete="on"/>
                        
                        <button type="submit" >
                            {languageLayout("Sign in","تسجيل الدخول")}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                            </svg>
                        </button>
                        <Link href="/resetpassword">
                            {languageLayout(
                                <p className={styleSignIn.forgotPass}>Forgot your password?</p>,
                                <p className={styleSignIn.forgotPass}>نسيت كلمة السر؟</p>
                            )}
                        </Link>
                        <p className={styleSignIn.error}>{error}</p>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}
