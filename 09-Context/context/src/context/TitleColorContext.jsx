import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();
export default TitleColorContext;

export const titleColorReducer = (state, action) => {
    //switch

}

export const TitleColorContextProvider = ({ children }) => {

    // quem altera o estado, e quem é o estado inicial
    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple'}); 
    console.log("Title color context:", state)

    return <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>;
}