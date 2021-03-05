import {useEffect} from 'react'
import styleLayout from "../styles/styleLayout.module.css"
import {AnimatePresence, motion} from "framer-motion";

//component
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NavLinks from "../components/NavLinks";
import Background from "../components/Background";

//stripe
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
const stripePromise = loadStripe("pk_test_51IQpxDHUaCGC0csozefIvtHwyJfeQDKz01NzxlesKSJ9XicBoCwjU6mUmekpQaAi4Mlb8iIwz0u3cVeaSYV6IiJ70078lSyNjC");

export default function Layout({children}) {
    useEffect(() => {
        const burgerContainer = document.querySelector(".navHambuger");
        const burgerIcon = document.querySelector(".navhambugerIcon")
        const contentBody = document.querySelector(".homeMainBody");
        const navLinks = document.querySelector(".navLinks");

        const handleResize = () => {
          document.documentElement.style.setProperty("--vh", window.innerHeight+"px");
        }
        const handleClick = () => {
          burgerIcon.classList.toggle("navBurgerActive");
          contentBody.classList.toggle("BurgerActiveContent");
          navLinks.classList.toggle("NavlinksActive");
        }

        handleResize();
    
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
      <AnimatePresence exitBeforeEnter>
        <motion.div className={styleLayout.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Nav /> 
        <NavLinks />
        <div className={[styleLayout.childWrap,"homeMainBody"].join(" ")}>
            <Background />
            <Elements stripe={stripePromise}>
              {children}         
            </Elements>
        </div> 
        <Footer />
        </motion.div>
      </AnimatePresence>
    )
}
