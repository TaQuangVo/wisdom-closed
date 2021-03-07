import styleHow from "../styles/StyleHow.module.css";
import {motion} from "framer-motion"

//component 
import Background from "../components/Background"


export default function purchase() {
    return (
        <motion.div 
        className={styleHow.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleHow.content}>
                <div className={styleHow.body}>
                    <h1>How does it work?</h1>
                    <p>- To purchase this service, you must have a code. By buying this service, a valuable wisdom will be shown on your dashboard, together with your own code Inviting your friends, family, and acquaintances to purchase this service by using your code will give you a commission. <br/><br/>- People who use your code will also get a code, If their code is being used they will get a commission and so do you.By inviting many to purchase this service by using your code, you will get a commission out of all the purchases that are related to your code which may reach thousands of multiples. You will get 1 USD for every purchase made by using your own code, also a commission for every purchase made by using any code generated after using your code. <br/><br/>- Don't miss this, Be a wise man, Be a millionaire.</p>
                </div>
            </div>
        </motion.div>
    )
}
