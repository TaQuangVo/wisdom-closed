import {useContext} from 'react'
import styleHome from "../styles/HomeMain.module.css"
import {useRouter} from "next/router";
import Link from "next/link";

//context
import {languageContext} from "../contexts/languageContext";

//component 
import Tesla from "../components/Testa"


 
export default function HomeMain() {

    const  {isEng} = useContext(languageContext);

    const languageLayout = (Engver, ArbVer) => {
        if(isEng){
            return Engver;
        }else{
            return ArbVer;
        }
    }

    const Router = useRouter();
    return (
        <main className={[styleHome.container].join(" ")} > 
            
            <div className={styleHome.content}>
                <div className={styleHome.body}>
                    <h1>Wisdom</h1>
                    {languageLayout(<h2>Get a Wisdom, get a chance to be a millionaire</h2>,<h2>احصل على حكمة، واحصل على فرصة لتصبح ثرياً</h2>)}
                    <button onClick={() => Router.push("/purchase")}>
                        {languageLayout("Get my wisdom", "اعطني حكمة")}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.3 17">
                            <polygon points="10.3 8.5 1.8 0 0 1.8 6.7 8.5 0 15.2 1.8 17 10.3 8.5"/>
                        </svg>
                    </button>
                    <Link href="/how">{languageLayout(<p>How does it work?</p>,<p>كيف يعمل الموقع؟</p>)}</Link>
                </div>
                
            </div>
            <Tesla />
        </main>
    )
}
