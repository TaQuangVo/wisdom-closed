import {useEffect,useRef,useState} from 'react'
import styleTesla from "../styles/Tesla.module.css"
import Link from "next/link"

export default function Testa() {
    let container = useRef(null);
    let closeBtn = useRef(null);
    const [open, setOpen] = useState(false)


    useEffect(() => {

        let count = 0;

        setTimeout(() => {
            setOpen(true);
        }, 4000);

        const autoReOpen = () => {
            setTimeout(() => {
                setOpen(true);
            }, 60000);
        }
        
        closeBtn.addEventListener("click", ()=> {
            setOpen(false);
            if(count < 1){
                autoReOpen();
                count++;
            }
        })

        return () => {
            
        }
    }, [])
    return (
        <div ref={el => container = el} className={open ? styleTesla.container : [styleTesla.container, "displayNone"].join(" ")}>
            <div className={styleTesla.logo}>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.85 299.88">
                    <path d="M362.1,331.6v18.23H368V337.69h21.27v12.14h5.85v-18.2l-33,0" transform="translate(-164.02 -49.98)"/>
                    <path  d="M367.29,325.7h22.48a8.28,8.28,0,0,0,6.1-6H361.2a8.3,8.3,0,0,0,6.09,6" transform="translate(-164.02 -49.98)"/>
                    <path d="M344.39,349.84a8.34,8.34,0,0,0,5.14-5.94H323.31l0-24.23-5.88,0v30.15h26.94" transform="translate(-164.02 -49.98)"/>
                    <path d="M273.74,325.62H294.5c3.13-.91,5.76-3.3,6.4-5.94h-33V337.5h27v6.25l-21.17,0a11.81,11.81,0,0,0-7.54,6.09l1.72,0h32.79V331.57h-27v-5.95" transform="translate(-164.02 -49.98)"/>
                    <path d="M222.48,325.68H245a8.31,8.31,0,0,0,6.1-6.05H216.38a8.36,8.36,0,0,0,6.1,6.05" transform="translate(-164.02 -49.98)"/>
                    <path d="M222.48,337.59H245a8.27,8.27,0,0,0,6.1-6H216.38a8.32,8.32,0,0,0,6.1,6" transform="translate(-164.02 -49.98)"/>
                    <path d="M222.48,349.84H245a8.31,8.31,0,0,0,6.1-6H216.38a8.36,8.36,0,0,0,6.1,6" transform="translate(-164.02 -49.98)"/>
                    <path d="M164,319.7a8.39,8.39,0,0,0,6.09,6h9.46l.48.19v23.87H186V325.9l.53-.19H196a8.5,8.5,0,0,0,6.06-6v-.05H164v.05" transform="translate(-164.02 -49.98)"/>
                    <path d="M280,260.06l29.51-166c28.14,0,37,3.09,38.29,15.68,0,0,18.87-7,28.39-21.33-37.14-17.21-74.47-18-74.47-18L279.91,97h0L258.18,70.42s-37.33.77-74.47,18c9.51,14.29,28.39,21.33,28.39,21.33,1.29-12.6,10.16-15.68,38.1-15.7Z" transform="translate(-164.02 -49.98)"/>
                    <path d="M280,62.76a243.14,243.14,0,0,1,99.58,20c4.7-8.46,5.91-12.21,5.91-12.21A288.9,288.9,0,0,0,279.94,50,288.89,288.89,0,0,0,174.45,70.53a102.8,102.8,0,0,0,5.91,12.21,243.08,243.08,0,0,1,99.58-20Z" transform="translate(-164.02 -49.98)"/>
                </svg>
            </div>
            <div className={styleTesla.content}>
                <h2>It's really wise to not miss the chance to win a Tesla Model 3</h2>
                <Link href="/learnmore"><button>Learn more</button></Link>
            </div>
            <div ref={el => closeBtn = el} className={styleTesla.close}>
            <svg viewBox="0 0 42 42">
                <path d="M325.08,649.18a21,21,0,1,0,21,21A21,21,0,0,0,325.08,649.18Zm0,38a17,17,0,1,1,17-17A17,17,0,0,1,325.08,687.18Z" transform="translate(-304.08 -649.18)"/>
                <path d="M327.91,670.18l4.53-4.53a2,2,0,0,0-2.83-2.83l-4.53,4.53-4.52-4.53a2,2,0,1,0-2.83,2.83l4.53,4.53-4.53,4.53a2,2,0,1,0,2.83,2.83l4.52-4.53,4.53,4.53a2,2,0,0,0,2.83-2.83Z" transform="translate(-304.08 -649.18)"/>
            </svg>
            </div>
        </div>
    )
}
