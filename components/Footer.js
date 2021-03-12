import {useContext} from 'react'
import styleFooter from "../styles/Footer.module.css"
import Link from "next/link";

//context
import {userContext} from "../contexts/userContext"

export default function Footer() {

    const {user} = useContext(userContext);
    //console.log(user)


    return (
        <footer className={styleFooter.container}>
            <div className={styleFooter.divider}>
                <div></div>
            </div>
            <div className={styleFooter.signin}>
                {
                    user === null ? (
                        <Link href="/signin"><h5>Sign In</h5></Link>
                    ):(
                        <Link href="/signin"><h5>Dasboard</h5></Link>
                    )
                }

            </div>
            <div className={styleFooter.copyright}>
                <h5>Copyright 2021 Wizzdom</h5>
            </div>
        </footer>
    )
}
