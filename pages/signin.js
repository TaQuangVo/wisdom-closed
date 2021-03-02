import {useState} from 'react'
import styleSignIn from "../styles/SignIn.module.css";

//component 
import Background from "../components/Background"


export default function purchase() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }else if (e.target.name === "password"){
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email: " + email);
        console.log("pwd: " + password);
    }

    return (
        <div className={styleSignIn.container}>
            <Background />
            <div className={styleSignIn.content}>
                <div className={styleSignIn.body}>
                    <h1>Sign in</h1>
                    <p>Well come back to Wisdom.nu</p>
                    <p>Signin to see your status</p>
                    <form onSubmit={e => {handleSubmit(e)}}>
                        <input onChange={(e)=>{handleChange(e)}} type="text" name="email" placeholder="Email" />
                        <input onChange={(e)=>{handleChange(e)}} type="password" name="password" placeholder="Password" />
                        <button type="submit" >
                            Sign in 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                                <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}