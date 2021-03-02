import styleAbout from "../styles/About.module.css";

//component 
import Background from "../components/Background"


export default function purchase() {
    return (
        <div className={styleAbout.container}>
            <Background />
            <div className={styleAbout.content}>
                <div className={styleAbout.body}>
                    <h1>About</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..".<br /><br/>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
    )
}
 