import {createContext, useState, useEffect} from "react";


export const languageContext = createContext(null);





export default function LanguageContextProvider({children}) {

    const [isEng, setIsEng] = useState(false);

    const changeLanguage = () => {
        setIsEng(prev => {
            return !prev;
        })
    }



    return (
        <languageContext.Provider value={{isEng,changeLanguage}}>
            {children} 
        </languageContext.Provider>
    )
}
