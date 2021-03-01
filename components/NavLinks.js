import styleLinks from "../styles/NavLink.module.css"
import Link from "next/link";

export default function NavLinks() {
    return (
        <div className={[styleLinks.container, "navLinks"].join(" ")}>
            <div className={styleLinks.body}>
                <Link href="/"><p>Home</p></Link>
                <Link href="#"><p>Sign in</p></Link>
                <Link href="#"><p>How doe it work?</p></Link>
                <Link href="#"><p>About us</p></Link>
                <Link href="#">
                    <button>
                        Get my wisdom
                    </button>
                </Link>
            </div>
        </div>
    )
}
