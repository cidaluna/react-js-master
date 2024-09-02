import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();
export default TitleColorContext;

export const titleColorReducer = (state, action) => {
    //switch
    switch(action.type){
        case "RED":
            return {...state, color: "red"};
        case "BLUE":
            return {...state, color: "blue"};
        default:
            return state;
    }
};

export const TitleColorContextProvider = ({ children }) => {

    // quem altera o estado, e quem é o estado inicial
    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple'}); 
    console.log("Title color context:", state)

    return <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>;
}