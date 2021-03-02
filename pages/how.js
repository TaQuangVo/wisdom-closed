import styleHow from "../styles/StyleHow.module.css";

//component 
import Background from "../components/Background"


export default function purchase() {
    return (
        <div className={styleHow.container}>
            <Background />
            <div className={styleHow.content}>
                <div className={styleHow.body}>
                    <h1>How does it work?</h1>
                    <p>By buying a Wisdom you have the acces to our system.Your will recieve a code, telling people to make a puchase using your code you will receive a commission.<br/><br/>People who use your code will also get a code. If their code is being used they will get a commission and so do you.<br /><br/>By being on the top, you will get a commission out of every purchases that related to your code.</p>
                </div>
            </div>
        </div>
    )
}
