import {useContext} from 'react'
import styleFooter from "../styles/Footer.module.css"
import Link from "next/link";

//context
import {userContext} from "../contexts/userContext"
import {languageContext} from "../contexts/languageContext";


export default function Footer() {

    const {user} = useContext(userContext);
    const  {isEng} = useContext(languageContext);
    //console.log(user)


    return (
        <footer className={styleFooter.container}>
            <div className={styleFooter.divider}>
                <div></div>
            </div>
            <div className={styleFooter.signin}>
                {
                    user === null ? (
                        <Link href="/signin">
                            {
                                isEng ? (
                                    <h5>Sign In</h5>
                                ):(
                                    <h5>تسجيل الدخول</h5>
                                )
                            }
                        </Link>
                    ):(
                        <Link href="/user">
                            {
                                isEng ? (
                                    <h5>Dashboard</h5>
                                ):(
                                    <h5>لوحة البيانات</h5>
                                )
                            }
                        </Link>
                    )
                }

            </div>
            <div className={styleFooter.copyright}>
                {
                    isEng ? (
                        <h5>Copyright 2021 Wizzdom</h5>
                    ) : (
                        <h5>Wizzdom جميع الحقوق محفوظة لشركة</h5>
                    )
                }
                
            </div>
        </footer>
    )
}
