import React from 'react'
import styleFooter from "../styles/Footer.module.css"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styleFooter.container}>
            <div className={styleFooter.divider}>
                <div></div>
            </div>
            <div className={styleFooter.signin}>
                <Link href="/signin"><h5>Sign In</h5></Link>
            </div>
            <div className={styleFooter.copyright}>
                <h5>Copyright 2021 Wisdom.nu</h5>
            </div>
        </footer>
    )
}
