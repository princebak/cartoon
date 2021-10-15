import React, {FunctionComponent, useState, useContext, createContext, ReactChildren} from "react";

export interface SearchStateInterface{
    text :  string,
    setText : (text : string) => void,
    isSearchScreenFocused : boolean,
    setIsSearchScreenFocused : (isFocus : boolean) => void,
}

export const GlobalContext = createContext<SearchStateInterface>({text : "", setText : (text : string) => {} , isSearchScreenFocused : false, setIsSearchScreenFocused : (isFocus : boolean) => {}})

const GlobalContextProvider : FunctionComponent<{children : any}> = ({children}) =>{
    const [text, setText] = useState<string>("")
    const [isSearchScreenFocused, setIsSearchScreenFocused] = useState<boolean>(false)
    return (
        <GlobalContext.Provider value={ {text : text, setText : setText, isSearchScreenFocused : isSearchScreenFocused, setIsSearchScreenFocused : setIsSearchScreenFocused} }>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider

export const useGlobalContext = () => useContext(GlobalContext)
