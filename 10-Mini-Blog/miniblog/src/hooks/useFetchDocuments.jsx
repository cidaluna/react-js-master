import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { db } from '../firebase/config';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false); // deal with memory leak

    useEffect(()=> {
        async function loadData(){
            if(cancelled) return;
            setLoading(true); // sets loading true while fetching data
            const collectionReferencia = await collection(db, docCollection);
            try{
                let q;
                //busca
                //dashboard

                // extracao de dados
                q = await query(collectionReferencia, orderBy("createdAt", "desc"));

                await onSnapshot(q, (querySnapshot) => {
                    // recebe um doc e cria um doc
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,    // id
                            ...doc.data(), //title, image, body, tags
                        }))
                    );
                });

                setLoading(false);
            }catch(error){
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        }
        loadData();  // executing the function
    }, [docCollection, search, uid, cancelled]); // dados que serão mapeados

    // cleaning memmory
    useEffect(()=> {
        return () => setCancelled(true);
    }, []);

    return {documents, loading, error};
};