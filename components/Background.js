import React from 'react'
import Image from "next/image"
import styleBackgound from "../styles/Background.module.css"

export default function Background() {
    return (
        <div className={styleBackgound.background} >
            <div className={styleBackgound.backgroundImg}>
                <Image src="/background.jpg" alt="Background img" layout="fill" objectFit="cover"/>
            </div>
            <div className={styleBackgound.overlay}></div>
        </div>
    )
}
