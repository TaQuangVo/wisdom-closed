import {useState} from 'react'
import stylePurchase from "../styles/StylePurchase.module.css";
import {motion} from "framer-motion"

//component 
import Background from "../components/Background"


export default function purchase() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [code,setCode] = useState("");
    const [card,setCard] = useState("");
    const [info,setInfo] = useState("");

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }else if (e.target.name === "password"){
            setPassword(e.target.value);
        }else if (e.target.name === "name"){
            setName(e.target.value);
        }else if (e.target.name === "code"){
            setCode(e.target.value);
        }else if (e.target.name === "card"){
            setCard(e.target.value);
        }else if (e.target.name === "info"){
            setInfo(e.target.value);
        }else if (e.target.name === "password"){
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email: " + email);
        console.log("pwd: " + password);
        console.log("name: " + name);
        console.log("code: " + code);
        console.log("card: " + card);
        console.log("info: " + info);
    }

    return (
        <motion.div 
        className={stylePurchase.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}
        >
            <div className={stylePurchase.content}>
                <div className={stylePurchase.body}>
                    <div className={stylePurchase.discriptions}>
                        <h1>Purchase a Wisdom</h1>
                        <h2>3$</h2>
                        <p>You will resive a wisdom and a code</p>
                        <p>after the payment went through.</p>
                        <p>Please, fill out all the boxes</p>
                    </div>
                    <span className={stylePurchase.divider}></span>
                    <div className={stylePurchase.forms}>
                        <form onSubmit={e => handleSubmit(e)}>
                            <h3>Create a accout</h3>
                            <input onChange={e => handleChange(e)} type="text" name="name" placeholder="Name" />
                            <input onChange={e => handleChange(e)} type="text" name="email" placeholder="Email" />
                            <input onChange={e => handleChange(e)} type="password" name="password" placeholder="Password" />
                            <h3>Purchase Code</h3>
                            <input onChange={e => handleChange(e)} type="text" name="code" placeholder="Purchase code" />
                            <h3>Payment</h3>
                            <input onChange={e => handleChange(e)} type="text" name="card" placeholder="Card number" />
                            <input onChange={e => handleChange(e)} type="text" name="info" placeholder="NN/YY" />
                            <button>
                                Get My wisdom
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                    <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
