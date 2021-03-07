import styleAbout from "../styles/About.module.css";
import {motion} from "framer-motion"



export default function purchase() {
    return (
        <motion.div 
        className={styleAbout.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleAbout.content}>
                <div className={styleAbout.body}>
                    <h1>Info & Terms </h1>
                    <p>- By buying our service, your code will be automatically included in the draw on a Tesla car. <br/><br/>- Each person buying our service using your code will increase your chances to win the car "Your code will be duplicated each timd a purchase is made by using your direct code".<br/><br/>- Once the members reach 500.000 members on our system, the draw will be done 4 week after that date.</p>                    
                </div>
            </div>
        </motion.div>
    )
}
 