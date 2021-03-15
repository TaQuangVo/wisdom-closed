import styleAbout from "../styles/About.module.css";
import {motion} from "framer-motion"
import {useContext} from 'react'

import {languageContext} from "../contexts/languageContext";



export default function purchase() {

    const  {isEng, changeLanguage} = useContext(languageContext);

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
    }


    return (
        <motion.div 
        className={styleAbout.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            <div className={styleAbout.content}>
                {languageLayout(
                    <div  className={styleAbout.body }>
                        <h1>Info & Terms </h1>
                        <p>- By buying our service, your code will be automatically included in the draw on a Tesla car. <br/><br/>- Each person buying our service using your code will increase your chances to win the car "Your code will be duplicated each timd a purchase is made by using your direct code".<br/><br/>- Once the members reach 500.000 members on our system, the draw will be done 4 week after that date.</p>                    
                    </div>,
                    <div className={[styleAbout.body,"arabicText"].join(" ")}>
                        <h1>المعلومات والشروط</h1>
                        <p>من خلال اشتراكك في خدمتنا، سيدخل الرمز الخاص بك بشكل اوتوماتيكي السحب لربح سيارة تسلا موديل ٣

                        <br/><br/>كل شخص يقوم بالاشتراك في خدمتنا من خلال الرمز الخاص بك سيزيد من فرص ربحك للسيارة "سيتضاعف الرمز الخاص بك في قرعة السحب عند كل عملية شراء تحدث من خلال الرمز الخاص بك"<br/><br/>عند وصول عدد المشتركين الى ٥٠٠ الف مشترك في منصتنا، سنقوم بالسحب ونعلن اسم الفائز بعد اربع اسابيع من تاريخ الوصول للعدد المطلوب</p>                    
                    </div>
                )}
            </div>
        </motion.div>
    )
}
 