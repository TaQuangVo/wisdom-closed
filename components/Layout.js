import {useEffect} from 'react'
import styleLayout from "../styles/styleLayout.module.css"

//component
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";

export default function Layout({children}) {
    useEffect(() => {
        const burgerContainer = document.querySelector(".navHambuger");
        const burgerIcon = document.querySelector(".navhambugerIcon")
        const contentBody = document.querySelector(".homeMainBody");
        const navLinks = document.querySelector(".navLinks");

        const handleResize = () => {
          console.log(window.innerHeight);
          document.documentElement.style.setProperty("--vh", window.innerHeight+"px");
        }
    
    
        const handleClick = () => {
          burgerIcon.classList.toggle("navBurgerActive");
          contentBody.classList.toggle("BurgerActiveContent");
          navLinks.classList.toggle("NavlinksActive");
        }
    
        burgerContainer.addEventListener("click", handleClick );
        navLinks.addEventListener("click",handleClick);
        window.addEventListener("resize", handleResize);
    
        return () => {
          burgerContainer.removeEventListener("click", handleClick);
          navLinks.removeEventListener("click", handleClick);
          window.removeEventListener("resize", handleResize);

        }
      }, [])
    return (
        <div className={styleLayout.container}>
        <Nav /> 
        <NavLinks />
        <div className={[styleLayout.childWrap,"homeMainBody"].join(" ")}>
            {children}
        </div> 
        <Footer />
        </div>
    )
}
