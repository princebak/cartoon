import React, {FunctionComponent, useState, useContext, createContext, ReactChildren} from "react";

export interface SearchStateInterface{
    text :  string,
    setText : (text : string) => void,
}

export const GlobalContext = createContext<SearchStateInterface>({text : "", setText : (text : string) => {} })

const GlobalContextProvider : FunctionComponent<{children : any}> = ({children}) =>{
    const [text, setText] = useState<string>("")

    return (
        <GlobalContext.Provider value={ {text : text, setText : setText} }>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider

export const useGlobalContext = () => useContext(GlobalContext)
