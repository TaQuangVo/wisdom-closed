import React from 'react'
import styleNav from "../styles/Nav.module.css";
import Link from "next/link"

export default function Nav() {
    return (
        <nav className={styleNav.container}>
            <div className={styleNav.body}>
                <div className={styleNav.logo}>
                    <Link href="/">
                    <h2>Wisdom</h2>
                    </Link>
                </div>
                <div className={[styleNav.hambuger,"navHambuger"].join(" ")}>
                    <div className={[styleNav.hambugerIcon, "navhambugerIcon"].join(" ")}></div>
                </div>
            </div>
        </nav>
    )
}
