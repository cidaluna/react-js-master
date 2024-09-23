import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false); // dealing with memory leak

  useEffect(() => {
    const loadDocument = async () => {
      // if it's cancelled, stops the execution
      if (cancelled) return;

      // sets loading true while fetching data
      setLoading(true);

      try {
        // getting the document/blog reference
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef); // metodo da base do Firebase

        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(true);
      }
    };

    // executing the function
    loadDocument();
  }, [docCollection, id, cancelled]);

  // cleaning memmory
  useEffect(() => {
    return () => setCancelled(true);
  },[]);

  return { document, loading, error };
};