
import styleRequest from "../styles/Request.module.css";
import {motion} from "framer-motion"
import {useState, useContext} from 'react'
import Link from "next/link"

//contexts
import {userContext} from "../contexts/userContext"


export default function PaymentRequest() {

    const {user} = useContext(userContext);

    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [bankAddress, setbankAddress] = useState("");
    const [bankNr, setbankNr] = useState("");
    const [iban, setiban] = useState("");
    const [swift, setswift] = useState("");


    const handleChange = (e) => {

        if(e.target.name === "name"){
            setname(e.target.value);
        }else if (e.target.name === "address"){
            setaddress(e.target.value);
        }else if (e.target.name === "email"){
            setemail(e.target.value);
        }else if (e.target.name === "phone"){
            setphone(e.target.value);
        }else if (e.target.name === "bankAddress"){
            setbankAddress(e.target.value);
        }else if (e.target.name === "bankNr"){
            setbankNr(e.target.value);
        }else if (e.target.name === "iban"){
            setiban(e.target.value);
        }else if (e.target.name === "swift"){
            setswift(e.target.value);
        }
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(name);
        console.log(address);
        console.log(email);
        console.log(phone);
        console.log(bankAddress);
        console.log(bankNr);
        console.log(iban);
        console.log(swift);
    }



    return (
        <motion.div 
        className={styleRequest.container}
        exit={{opacity:0}} 
        initial={{opacity:0}} 
        animate={{opacity:1}}
        >
            <div className={styleRequest.content}>

                {user !== null ? (
                    <div className={styleRequest.body}>
                    <div className={styleRequest.discriptions}>
                        <h1>Request a pay out</h1>
                        <h2>{user.point[0]*1 + user.point[1]*0.1 + user.point[2]*0.05 + user.point[3]*0.025}</h2>
                        <p>Fill out all the fields</p>
                        <p>We will be sending you the amount</p>
                    </div>
                    <span className={styleRequest.divider}></span>
                    <div className={styleRequest.forms}>
                        <form onSubmit={e => handleSubmit(e)} >
                            <div>
                                <h3>Full name</h3>
                                <input onChange={e => handleChange(e)} type="text" name="name" autoComplete="off"/>
                                <h3>Address</h3>
                                <input onChange={e => handleChange(e)} type="text" name="address" autoComplete="none"/>
                                <h3>Email</h3>
                                <input onChange={e => handleChange(e)} type="text" name="email" autoComplete="none"/>
                                <h3>Phone nr</h3>
                                <input onChange={e => handleChange(e)} type="text" name="phone" autoComplete="none"/>
                                <h3>Name and full address of recipient's bank</h3>
                                <input onChange={e => handleChange(e)} type="text" name="bankAddress" autoComplete="none"/>
                                <h3>Account bumber and account type</h3>
                                <input onChange={e => handleChange(e)} type="text" name="bankNr" autoComplete="none"/>
                                <h3>IBAN</h3>
                                <input onChange={e => handleChange(e)} type="text" name="iban" autoComplete="none"/>
                                <h3>SWIFT or BIC code</h3>
                                <input onChange={e => handleChange(e)} type="text" name="swift" autoComplete="none"/>
                                <h3>Passport picture</h3>
                                <input onChange={e => handleChange(e)} type="file" name="pass" autoComplete="none"/>

                                
                                <p className={styleRequest.acceptPolicy}>* By commiting the payment, you agreed to our <span><Link href="/policy">Purchasing policy</Link></span></p>
                                <button type="submit" >
                                    Get My wisdom
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                        <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                                    </svg>
                                </button>
                                <p className={styleRequest.formOneError}>{"error"}</p>
                            </div>                            
                        </form>                      
                    </div>
                </div>
                ) : (<h1>pleze login</h1>)}
                
            </div>
        </motion.div>
    )
}
 




