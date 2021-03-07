import { motion } from 'framer-motion'
import {useEffect,useState , useContext} from 'react'
import styleUser from "../styles/userStyle.module.css"
import Link from "next/link"


//contexts
import {userContext} from "../contexts/userContext"

export default function user() {


    const {user} = useContext(userContext);

    return (

        <motion.div 
        className={styleUser.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleUser.content}>
                {user !== null ? (
                <div className={styleUser.body}>
                    <h2>Hi, how are you {user.name}</h2>
                    <h1>"{user.wisdom}"</h1>
                    <h4>Your code is:</h4>
                    <h4>{user.myCode}</h4>
                    <div className={styleUser.points}>
                        <div>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.95 23.98">
                            <path d="M771.31,518.93a3.18,3.18,0,0,0-1.87.6l-6.5-5.08a3.1,3.1,0,0,0,.13-.92,3.32,3.32,0,0,0-.27-1.3l6.3-4.92a3.18,3.18,0,0,0,1.87.6,3.24,3.24,0,1,0-3.24-3.24,3.19,3.19,0,0,0,.39,1.53l-6.21,4.85a3.24,3.24,0,1,0,.29,4.69l6.26,4.9a3.13,3.13,0,0,0-.39,1.53,3.24,3.24,0,1,0,3.24-3.24Z" transform="translate(-756.59 -501.43)"/>
                        </svg>
                        <h5>{user.point[0]}</h5>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.05 30.32">
                            <path d="M759.33,544.47a4.14,4.14,0,0,0-2.42.78l-8.37-6.55a4.16,4.16,0,0,0,.17-1.18,4.24,4.24,0,0,0-.35-1.68l7.9-6.18a4.17,4.17,0,1,0-1-1.61l-8,6.27a4.17,4.17,0,0,0-6.86,3.2,4.1,4.1,0,0,0,.58,2.11l-7.55,5.9a4.11,4.11,0,0,0-2.77-1.06,4.18,4.18,0,1,0,4.18,4.18,4.06,4.06,0,0,0-.31-1.56l7.77-6.07a4.21,4.21,0,0,0,2.28.67,4.16,4.16,0,0,0,3-1.32l8.07,6.31a4.06,4.06,0,0,0-.5,2,4.18,4.18,0,1,0,4.18-4.18Z" transform="translate(-726.45 -522.51)"/>
                        </svg>
                        <h5>{user.point[1] + user.point[2] + user.point[3]}</h5>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.12 27.06">
                            <path d="M806.05,547.51c0,1.13-.77,1.69-2.32,1.69H803l-.64,0v2h-1.81v-2l-.63,0h-.69c-1.54,0-2.31-.56-2.31-1.69v-5.78H799v5.69h1.56v-9.63l-3-3.68a2.78,2.78,0,0,1-.67-1.78v-4.59q0-1.68,2.31-1.68c.16,0,.39,0,.69,0l.63,0v-2h1.81v2l.64,0c.31,0,.54,0,.71,0,1.55,0,2.32.56,2.32,1.68V533H804v-5.2h-1.59v9l3,3.64a2.73,2.73,0,0,1,.67,1.75Zm-5.48-12.76v-6.92H799v4.93Zm3.4,12.67v-5.6l-1.59-1.93v7.53Z" transform="translate(-796.94 -524.1)"/>
                        </svg>
                        <h5>{user.point[0]*1 + user.point[1]*0.1 + user.point[2]*0.05 + user.point[3]*0.025}</h5>
                        </div>
                    </div>
                    <button>
                        Request a withdraw
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                            <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                        </svg>
                    </button>
                    <p>A minimum of 300$ is required to make a request</p>
                </div>
                ):(
                <div className={styleUser.body}>
                    <h1>Your are not logged in</h1>
                    <h2>Pleaze Login, <Link href="/signin"><span>here</span></Link></h2>
                    <Link href="/"><p className={styleUser.goHome}>Got to homepage</p></Link>
                </div>
                )}
                
            </div>
        </motion.div>
    )
}
