import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { db } from '../firebase/config';

const initialState = {
    loading: null,
    error: null
};

const insertReducer = (state,action) => {
    // loading, documento inserido, erros

    switch(action.type){
        case "LOADING":
            return {loading: true, error: null};
        case "INSERTED_DOC":
            return {loading: false, error: null};
        case "ERROR":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    // deal with memory leak - para nao ter vazamento de memoria
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action);
        }
    };

    const insertDocument = async(document) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
    });

    try{
        const newDocument = {...document, createdAt: Timestamp.now()};

        const insertedDocument = await addDoc(
            collection(db, docCollection),
            newDocument
        );

        checkCancelBeforeDispatch({
            type: "INSERTED_DOC",
            payload: insertedDocument
        });
    }catch(error){
        checkCancelBeforeDispatch({
            type: "ERROR",
            payload: error.message
        });
    }
};

    
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

return { insertDocument, response };

};