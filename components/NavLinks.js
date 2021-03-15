import styleLinks from "../styles/NavLink.module.css"
import Link from "next/link";
import {useContext} from 'react'

//contexts
import {userContext} from "../contexts/userContext"
import {languageContext} from "../contexts/languageContext";



export default function NavLinks() {

    const {user, signOutUser} = useContext(userContext);
    const  {isEng, changeLanguage} = useContext(languageContext);

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
    }


    return (
        <div className={[styleLinks.container, "navLinks"].join(" ")}>
            <div className={styleLinks.body}>
                <Link href="/">{languageLayout(<p>Home</p>,<p>الرئيسية</p>)}</Link>
                {
                    user === null ? <Link href="/signin">{
                        languageLayout(<p>Sign in</p>, <p>تسجيل الدخول</p>)
                    }</Link>
                     : 
                    <Link href="/user">{
                        languageLayout(<p>Dasboard</p>, <p>لوحة البيانات</p>)
                    }</Link>
                }
                
                <Link href="/how">{languageLayout(<p>How does it work?</p>, <p>كيف يعمل الموقع؟</p>)}</Link>
                <Link href="/policy">{
                    languageLayout(<p>Purchasing policy</p>, <p>سياسة الشراء</p>)
                }</Link>
                <Link href="/purchase">
                    <button>
                    {languageLayout("Get my wisdom", "احصل على حكمة") }
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                            <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                        </svg>
                    </button>
                </Link>
                {
                    !isEng ? (
                        <span onClick={changeLanguage} className={styleLinks.language}>English</span>
                    ) : (
                        <span onClick={changeLanguage} className={styleLinks.language}>العربية</span>
                    )
                }
                
                {
                    user !== null && <span onClick={signOutUser}>{languageLayout("Sign out","تسجيل الخروج")}</span>
                }
            </div>
        </div>
    )
}
