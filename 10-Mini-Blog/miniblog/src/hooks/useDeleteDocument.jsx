import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { db } from '../firebase/config';

const initialState = {
    loading: null,
    error: null
};

const deleteReducer = (state,action) => {
    // loading, documento inserido, erros

    switch(action.type){
        case "LOADING":
            return {loading: true, error: null};
        case "DELETED_DOC":
            return {loading: false, error: null};
        case "ERROR":
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState);

    // deal with memory leak - para nao ter vazamento de memoria
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action);
        }
    };

    const deleteDocument = async(id) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
    });

    try{
        const deletedDocument = await deleteDoc(doc(db, docCollection, id));

        checkCancelBeforeDispatch({
            type: "DELETED_DOC",
            payload: deletedDocument
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

return { deleteDocument, response };

};