import styleHow from "../styles/StyleHow.module.css";
import {motion} from "framer-motion"
import {useContext, useEffect} from 'react'

import {languageContext} from "../contexts/languageContext";

//component 
import Background from "../components/Background"


export default function purchase() {

    const  {isEng} = useContext(languageContext);

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
    }

    return (
        <motion.div 
        className={styleHow.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}>
            {languageLayout(
            <div className={styleHow.content}>
                <div className={styleHow.body}>
                    <h1>How does it work?</h1>
                    <p>- To purchase this service, you must have a code.<br/><br/>- By buying this service, a valuable wisdom will be shown on your dashboard, together with your own code.<br/><br/>- Inviting your friends, family, and acquaintances to purchase this service by using your code will give you a commission. <br/><br/>- People who use your code will also get a code, If their code is being used they will get a commission and so do you.<br/><br/>- By inviting many to purchase this service by using your code, you will get a commission out of all the purchases that are related to your code which may reach thousands of multiples. <br/><br/>- You will get 1 USD for every purchase made by using your own code, also a commission for every purchase made by using any code generated after using your code. <br/><br/>- Don't miss this, Be a wise man, Be a millionaire.</p>
                </div>
            </div>,
            <div className={styleHow.content}>
                <div className={styleHow.body}>
                    <h1>كيف يعمل الموقع؟</h1>
                    <p className="arabicText">لشراء خدمتنا يجب عليك امتلاك رمز<br/><br/>عند شراءك لخدمتنا سيتم عرض حكمة ثمينة على لوحة البيانات الخاصة بك، وسيتم ايضا عرض الرمز الخاص بك<br/><br/>.عند دعوة اصداقائك، افراد عائلتك او معارفك لشراء هذه الخدمة من خلال الرمز الخاص بك سيعطيك نسبة عمولة<br/><br/>.الاشخاص الذين استخدموا الرمز الخاص بك سيحصلون ايضاً على رمز خاص بهم. عند شراء الناس من خلال الرمز الخاص بهم سيحصلون همعلى عمولة، وستحصل انت ايضاً على نسبة من هذه العمولة<br/><br/>من خلال دعوة اكبر عدد ممكن لشراء هذه الخدمة باستخدام الرمز الخاص بك، ستحصل على عمولة من جميع المشتريات المتعلقة بالرمز الخاص بك،والتي قد تصل إلى آلاف المضاعفات او اكثر اعتماداً على عدد الاشخاص الذين اشتروا الخدمة من خلال الرمز الخاص بك<br/><br/>ستحصل على 1 دولار أمريكي مقابل كل عملية شراء يتم إجراؤها باستخدام الرمز الخاص بك. وأيضًا عمولة على كل عملية شراء يتم إجراؤهاباستخدام أي رمز يتم إنشاؤه بعد استخدام الرمز الخاص بك<br/><br/>لا تفوت هذا الفرصة ، كن حكيما ، كن ثرياً</p>
                </div>
            </div>
            )}
        </motion.div>
    )
}
