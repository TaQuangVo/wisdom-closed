import {createContext, useState, useEffect} from "react";


export const languageContext = createContext(null);





export default function LanguageContextProvider({children}) {

    const [isEng, setIsEng] = useState(true);

    const changeLanguage = () => {
        setIsEng(prev => {
            return !prev;
        })
    }

    useEffect(() => {
        if(isEng){
            document.documentElement.style.setProperty("--fontOne", "'Saira Extra Condensed', sans-serif");
        }else{
            document.documentElement.style.setProperty("--fontOne", "'Tajawal', sans-serif");
        }
        

    }, [isEng])



    return (
        <languageContext.Provider value={{isEng,changeLanguage}}>
            {children} 
        </languageContext.Provider>
    )
}
