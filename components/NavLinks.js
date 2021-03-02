import styleLinks from "../styles/NavLink.module.css"
import Link from "next/link";

export default function NavLinks() {
    return (
        <div className={[styleLinks.container, "navLinks"].join(" ")}>
            <div className={styleLinks.body}>
                <Link href="/"><p>Home</p></Link>
                <Link href="/signin"><p>Sign in</p></Link>
                <Link href="/how"><p>How doe it work?</p></Link>
                <Link href="/about"><p>About us</p></Link>
                <Link href="/purchase">
                    <button>
                        Get my wisdom
                    </button>
                </Link>
            </div>
        </div>
    )
}
