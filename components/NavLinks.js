import styleLinks from "../styles/NavLink.module.css"
import Link from "next/link";
import {useContext} from 'react'

//contexts
import {userContext} from "../contexts/userContext"



export default function NavLinks() {

    const {user, signOutUser} = useContext(userContext);


    return (
        <div className={[styleLinks.container, "navLinks"].join(" ")}>
            <div className={styleLinks.body}>
                <Link href="/"><p>Home</p></Link>
                {
                    user === null ? <Link href="/signin"><p>Sign in</p></Link>
                     : 
                    <Link href="/user"><p>Dasboard</p></Link>
                }
                
                <Link href="/how"><p>How does it work?</p></Link>
                <Link href="/about"><p>Purchasing policy</p></Link>
                <Link href="/purchase">
                    <button>
                        Get my wisdom
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                            <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                        </svg>
                    </button>
                </Link>
                {
                    user !== null && <span onClick={signOutUser}>Sign Out</span>
                }
            </div>
        </div>
    )
}
